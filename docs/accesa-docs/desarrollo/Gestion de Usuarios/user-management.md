---
id: user-management
title: Documentación relacionada a la funcionalidad de Gestión de Usuarios
---

# Documentación del Backend de Gestión de Usuarios

## Introducción

El proyecto se encarga de la gestión de usuarios de diferentes sistemas de Accesa, tales como el Dashboard, el Nuevo Portal y el sistema de Gestión de Usuarios. Los diferentes endpoints manejan funcionalidades CRUD de usuarios, asignación de permisos y gestión de credenciales. Es importante destacar que todos los sistemas utilizan un esquema de base de datos integrado, por lo que las modificaciones desde el sistema de Gestión de Usuarios impactan en los tres sistemas asociados.

## Requisitos

El proyecto está desarrollado con:
- Java 17
- Spring Boot 3.3.0
- Maven

## Instalación

El proyecto está disponible en GitHub: [User-Manager-Backend](https://github.com/Accesa-Desarrollo/User-Manager-Backend). Debes clonar el repositorio y asegurarte de tener Java 17 instalado.

## Configuración

El proyecto incluye un archivo `application.properties` principal y tres archivos de configuración (`application-dev.properties`, `application-prod.properties`, `application-qa.properties`). Configura la variable `spring.profiles.active` en la raíz del archivo `application.properties` con uno de los valores: `dev`, `prod` o `qa`. Esto determina el archivo de propiedades activo. Los archivos `.properties` contienen datos sensibles (como acceso a bases de datos y API keys) y configuraciones globales (como los drivers).

## Uso

Para inicializar el proyecto, abre el proyecto en un IDE y ejecuta la clase `UserMApplication.java` haciendo clic derecho y seleccionando `Run as -> Java Application` o `Run as -> Spring Boot App`.

## Estructura de Componentes

- **Paquete Principal**  
  El proyecto se inicializa desde el paquete `com.userManager.main`.

- **Controladores**  
  Los controladores están ubicados en el paquete `com.userManager.controllers`.

- **Persistencia de Datos**  
  El acceso a los datos se maneja de dos maneras:
  - **JPA**: La lógica de los endpoints que utilizan JPA se encuentra en el paquete `com.userManager.repositories`. Este paquete también contiene las interfaces relacionadas con JDBC.
  - **JDBC**: La interfaz para los métodos que utilizan JDBC está en el archivo `UserJDBCRepository.java`, ubicado en el paquete `com.userManager.repositories`. Las implementaciones de estos métodos están en el paquete `com.userManager.implementations`.

- **Entidades**  
  Los objetos utilizados para requerir y responder datos están en el paquete `com.userManager.entities`.

- **Utilidades**  
  Los métodos y utilidades universales están en el paquete `com.userManager.util`.

- **Interfaces de Active Directory**  
  En el paquete `com.userManager.interfaces` se encuentra una clase que actúa como interfaz para las funciones relacionadas con Active Directory de ANTEL.

## Descripción de los Controladores y Endpoints

Para utilizar los endpoints, accede desde la URL: `http://ip:port/controllerMapping/endpointMapping`, donde `controllerMapping` es el valor del controlador, y `endpointMapping` es el valor de la función. Los parámetros se colocan en el body o en la URL, dependiendo del tipo de solicitud (GET, POST, PUT, DELETE).

### UserController (/auth)

- **/getUsers**
  - **Tipo**: GET
  - **Retorno**: Lista de objetos `ResponseUser` (id, nombre de usuario, primer nombre, apellido, fecha de última modificación, fecha de último ingreso, fecha de creación y estado).
  - **Descripción**: Obtiene información de todos los usuarios registrados en la base de datos, tengan permisos o no.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios

- **/login**
  - **Tipo**: POST
  - **Parámetros**: 
    - `username`: nombre de usuario.
  - **Retorno**: Objeto `ReturnUser` (nombre de usuario, nombre, apellido, token, estado).
  - **Descripción**: Obtiene la información del usuario que se acaba de loguear.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/user**
  - **Tipo**: GET
  - **Parámetros**: 
    - `first_name`: nombre
    - `last_name`: apellido.
  - **Retorno**: Objeto `ResponseUser` (id, nombre de usuario, nombre, apellido y estado).
  - **Descripción**: Obtiene la información del usuario no confidencial.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/updateUser**
  - **Tipo**: PUT
  - **Parámetros**: 
    - `username`: nombre de usuario.
  - **RequestBody**: 
    - `permissions`: Lista de objetos `ResponsePermissionCreation`.
  - **Retorno**: Objeto `ReturnUser` (nombre de usuario, nombre, apellido, token, estado).
  - **Descripción**: Actualiza los permisos de un usuario.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios

- **/deleteUser**
  - **Tipo**: DELETE
  - **Parámetros**: 
    - `username`: nombre de usuario.
  - **Retorno**: Número, 1 si la eliminación es correcta o 0 si fue fallida.
  - **Descripción**: Elimina usuarios de todos los sistemas a la vez.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios

- **/createUser**
  - **Tipo**: PUT
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `first_name`: nombre.
    - `last_name`: apellido.
    - `password` (opcional): contraseña.
    - `email` (opcional): correo electrónico.
  - **RequestBody**:
    - `permissions`: Lista de objetos `ResponsePermissionCreation`.
  - **Retorno**: Número, 0 si la creación fue fallida, 1 si la creación fue correcta, 2 si el nombre de usuario ya está en uso, 3 si el email ya está en uso.
  - **Descripción**: Crea un nuevo usuario. El email y la contraseña son opcionales.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios

- **/validateLogin**
  - **Tipo**: PUT
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `password`: contraseña.
    - `systemNumber`: número de sistema.
  - **Retorno**: Número, 0 si el login falla, 1 si el login es correcto.
  - **Descripción**: Valida el login de un usuario. Verifica que el usuario y su contraseña sean válidos y que tenga al menos un permiso para el sistema al que ingresa.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/changePassword**
  - **Tipo**: PUT
  - **Parámetros**: 
    - `email`: correo electrónico.
    - `username`: nombre de usuario.
  - **Retorno**: Número, 0 si el login falla, 1 si se envió el email con una contraseña temporal, 2 si el usuario es de NTDOM y debe cambiarla en otro lugar.
  - **Descripción**: Comienza el proceso de cambio de contraseña, válido solo para usuarios externos a NTDOM.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/updatePassword**
  - **Tipo**: POST
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `password`: contraseña temporal.
    - `newPassword`: nueva contraseña.
  - **Retorno**: Número, 0 si el cambio de contraseña falla, 1 si el cambio de contraseña es correcto.
  - **Descripción**: Realiza el cambio de contraseña para usuarios externos a NTDOM.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/insertUserLog**
  - **Tipo**: POST
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `item`: ítem del sistema al que ingresa.
    - `subItem`: subítem del sistema al que ingresa.
    - `subSubItem`: sub-subítem del sistema al que ingresa.
    - `route`: ruta del sistema al que ingresa.
    - `sysName`: nombre del sistema.
  - **Retorno**: `void`.
  - **Descripción**: Registra logs de usuarios cada vez que ingresan a una pestaña de un sistema.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

### PermissionsController (/permission)

- **/getPermissions**
  - **Tipo**: GET
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `systemNumber`: nombre del sistema.
  - **Retorno**: Mapa con un string y una lista de mapas de string que conforman los permisos de cada uno de los sistemas según el sistema y usuario consultados.
  - **Descripción**: Obtiene los permisos de un sistema específico para un usuario.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios, Dashboard, New Portal

- **/getPermissionsCreation**
  - **Tipo**: GET
  - **Parámetros**: 
    - `username`: nombre de usuario.
    - `systemNumber`: nombre del sistema.
  - **Retorno**: Retorna un mapa con un string y una lista de mapas de string que conforman los permisos de todos los sistemas de un usuario o vacíos para un nuevo usuario.
  - **Descripción**: Este endpoint se utiliza para obtener los permisos de todos los sistemas correspondientes a un usuario en particular. Se usa para la actualización y creación de usuarios.
  - **Dónde se utiliza**: Sistema de Gestión de Usuarios


	


