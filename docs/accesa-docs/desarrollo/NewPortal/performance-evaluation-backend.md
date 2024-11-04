---
id: performance-evaluation-backend
title: Documentación de los Endpoints – Evaluación de Desempeño
---	
# Documentación de los Endpoints – Evaluación de Desempeño 

## Introducción
El proyecto contiene endpoints que se utilizan en el módulo de evaluación de desempeño. Envía la información que almacena el proceso en la base de datos, envía información de combos, y recibe actualizaciones y envíos de evaluaciones.

## Requisitos
El proyecto está realizado con:
-	 Java 17.
-	Springboot 3.3.0.
-	Maven.

## Instalación
El proyecto se encuentra en Github (https://github.com/Accesa-Desarrollo/Performance-Evaluation-Backend), se debe clonar el repo. Es necesario tener instalado Java 17. 

## Configuración
El proyecto cuenta con un archivo application.properties de raíz, además de este, se encuentran 2 archivos tipo .properties (application-dev.properties y application-prod.properties). 
A la raíz, se le agrega un valor a la variable spring.profiles.active,  que puede ser ‘dev’ o ‘prod’, de esto depende a dónde apuntará el application.properties. 
Dentro de los .properties se encuentran datos sensibles (acceso a base de datos, apikeys) y globales (como los drivers).

## Uso
Para inicializar el proyecto, con el mismo abierto en un IDE, se debe presionar click derecho en la clase, que se encuentra en el paquete main, PerformanceEvaluationBackendApplication.java -> Run as -> Java Application o Spring Boot App.

## Estructura de Componentes
El proyecto se inicializa desde el paquete com.main. 
Los controladores correspondientes se encuentran en com.controllers.
La lógica de los endpoints que se encuentran en los controladores, están en el paquete com.servicesImpl., los métodos se declaran en el paquete com.services
Los objetos a utilizar para requerir y responder datos se encuentran en el paquete com.beans.

## Descripción de los controladores y endpoints	
Para utilizar los endpoints, se accede desde la url: ```(http://ip:port/controllerMapping/endpointMapping)```. Siendo controllerMapping el valor del controlador, y endpointMapping el valor de la función.
Dependiendo de si es GET o POST, se colocarán los parámetros (en el body o en la url)

## EvaluationController (/evaluation)
### getSkillsQuestions
-	Tipo: GET
-	Parámetros: 
o	EvaluationID: id de la evaluación a rellenar.
-	Retorno: Retorna una lista de objetos de tipo SkillsQuestions (id, nombre, definición, nivel, opciones, opciones-porcentaje).
-	Descripción: Este endpoint se utiliza para obtener las definiciones a calificar en la pestaña ‘Competencias’. 
-	Dónde se utiliza: Frontend NewPortal. 

### getEvaluation
-	Tipo: GET
-	Parámetros: 
o	monthYear: mes-año de la evaluación a buscar.
o	username: nombre de usuario del agente.
o	evaluationType: tipo de evaluación (mensual o semestral) -1 o 2-
-	Retorno: Retorna un objeto de tipo Evaluation (contiene toda la información de la tabla evaluation).
-	Descripción: Este endpoint se utiliza para obtener la evaluación seleccionada.
-	Dónde se utiliza: Frontend NewPortal.

### sendEvaluationSkills
-	Tipo: POST
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### getGoals
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### rechargeGoals
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### getNoWorkedDays
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### getMonitorings
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.
### addComment
-	Tipo: POST
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### sendEvaluationGoals
-	Tipo: POST
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### insertEvaluationLog
-	Tipo: POST
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### getTotals
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### sendEvaluation
-	Tipo: POST
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

### getEvaluationLog
-	Tipo: GET
-	Parámetros: 
-	Retorno: 
-	Descripción: 
-	Dónde se utiliza: Frontend NewPortal.

## UserController (/user)

### getUserInfo
-	Tipo: GET
-	Parámetros: 
o	userID: usuario del portal (agente).
-	Retorno: Devuele un objeto de tipo UserInformation (nombre, documento, cargo, horario, carga horaria, sección, sitio e imagen).
-	Descripción: Se utiliza para recargar el panel de información al seleccionar un agente a evaluar.
-	Dónde se utiliza: Frontend NewPortal.

### getUsersFromLider
-	Tipo: GET
-	Parámetros: 
o	liderID: usuario líder.
-	Retorno: Retorna un HashMap que contiene los usuarios y nombres de cada usuario que depende del líder.
-	Descripción: Se utiliza para cargar el combo de agentes a evaluar.
-	Dónde se utiliza: Frontend NewPortal.

## ConfigurationController (/configuration)

### get
-	Tipo: GET
-	Parámetros: 
o	N/A
-	Retorno: Retorna listado de tipo ConfigurationProperties que contiene la información de la tabla Configuration_properties.
-	Descripción: Se utiliza para visualizar valores que se encuentran en dicha tabla.
-	Dónde se utiliza: Frontend NewPortal.

### update
-	Tipo: PUT
-	Parámetros: 
o	UpdateConfiguration: (body) contiene id, valor nuevo.
-	Retorno: Retorna 1 si todo salió bien, 0 por error.
-	Descripción: Se utiliza para visualizar valores que se encuentran en la tabla configuration_properties.
-	Dónde se utiliza: Frontend NewPortal.


## Servicios y Dependencias
Las dependencias utilizadas en el proyecto se encuentran en el pom.xml

## Pruebas
[Instrucciones para correr pruebas funcionales, unitarias y de integración.]

## Despliegue
El despliegue es realizado con Docker por el Jefe de Desarrollo.

