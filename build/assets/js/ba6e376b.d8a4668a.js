"use strict";(self.webpackChunkaccesa_docs=self.webpackChunkaccesa_docs||[]).push([[1685],{8728:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=n(4848),r=n(8453);const l={id:"user-management",title:"Documentaci\xf3n relacionada a la funcionalidad de Gesti\xf3n de Usuarios"},o="Documentaci\xf3n del Backend de Gesti\xf3n de Usuarios",d={id:"accesa-docs/desarrollo/Gestion de Usuarios/user-management",title:"Documentaci\xf3n relacionada a la funcionalidad de Gesti\xf3n de Usuarios",description:"Introducci\xf3n",source:"@site/docs/accesa-docs/desarrollo/Gestion de Usuarios/user-management.md",sourceDirName:"accesa-docs/desarrollo/Gestion de Usuarios",slug:"/accesa-docs/desarrollo/Gestion de Usuarios/user-management",permalink:"/docs/accesa-docs/desarrollo/Gestion de Usuarios/user-management",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-management",title:"Documentaci\xf3n relacionada a la funcionalidad de Gesti\xf3n de Usuarios"},sidebar:"desarrolloSidebar",previous:{title:"Ayuda a Primera Infancia",permalink:"/docs/accesa-docs/desarrollo/APInfancia"},next:{title:"Ayuda a Primera Infancia",permalink:"/docs/accesa-docs/desarrollo/APInfancia"}},c={},a=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Requisitos",id:"requisitos",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Uso",id:"uso",level:2},{value:"Estructura de Componentes",id:"estructura-de-componentes",level:2},{value:"Descripci\xf3n de los Controladores y Endpoints",id:"descripci\xf3n-de-los-controladores-y-endpoints",level:2},{value:"UserController (/auth)",id:"usercontroller-auth",level:3},{value:"PermissionsController (/permission)",id:"permissionscontroller-permission",level:3}];function t(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"documentaci\xf3n-del-backend-de-gesti\xf3n-de-usuarios",children:"Documentaci\xf3n del Backend de Gesti\xf3n de Usuarios"})}),"\n",(0,i.jsx)(s.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,i.jsx)(s.p,{children:"El proyecto se encarga de la gesti\xf3n de usuarios de diferentes sistemas de Accesa, tales como el Dashboard, el Nuevo Portal y el sistema de Gesti\xf3n de Usuarios. Los diferentes endpoints manejan funcionalidades CRUD de usuarios, asignaci\xf3n de permisos y gesti\xf3n de credenciales. Es importante destacar que todos los sistemas utilizan un esquema de base de datos integrado, por lo que las modificaciones desde el sistema de Gesti\xf3n de Usuarios impactan en los tres sistemas asociados."}),"\n",(0,i.jsx)(s.h2,{id:"requisitos",children:"Requisitos"}),"\n",(0,i.jsx)(s.p,{children:"El proyecto est\xe1 desarrollado con:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Java 17"}),"\n",(0,i.jsx)(s.li,{children:"Spring Boot 3.3.0"}),"\n",(0,i.jsx)(s.li,{children:"Maven"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["El proyecto est\xe1 disponible en GitHub: ",(0,i.jsx)(s.a,{href:"https://github.com/Accesa-Desarrollo/User-Manager-Backend",children:"User-Manager-Backend"}),". Debes clonar el repositorio y asegurarte de tener Java 17 instalado."]}),"\n",(0,i.jsx)(s.h2,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["El proyecto incluye un archivo ",(0,i.jsx)(s.code,{children:"application.properties"})," principal y tres archivos de configuraci\xf3n (",(0,i.jsx)(s.code,{children:"application-dev.properties"}),", ",(0,i.jsx)(s.code,{children:"application-prod.properties"}),", ",(0,i.jsx)(s.code,{children:"application-qa.properties"}),"). Configura la variable ",(0,i.jsx)(s.code,{children:"spring.profiles.active"})," en la ra\xedz del archivo ",(0,i.jsx)(s.code,{children:"application.properties"})," con uno de los valores: ",(0,i.jsx)(s.code,{children:"dev"}),", ",(0,i.jsx)(s.code,{children:"prod"})," o ",(0,i.jsx)(s.code,{children:"qa"}),". Esto determina el archivo de propiedades activo. Los archivos ",(0,i.jsx)(s.code,{children:".properties"})," contienen datos sensibles (como acceso a bases de datos y API keys) y configuraciones globales (como los drivers)."]}),"\n",(0,i.jsx)(s.h2,{id:"uso",children:"Uso"}),"\n",(0,i.jsxs)(s.p,{children:["Para inicializar el proyecto, abre el proyecto en un IDE y ejecuta la clase ",(0,i.jsx)(s.code,{children:"UserMApplication.java"})," haciendo clic derecho y seleccionando ",(0,i.jsx)(s.code,{children:"Run as -> Java Application"})," o ",(0,i.jsx)(s.code,{children:"Run as -> Spring Boot App"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"estructura-de-componentes",children:"Estructura de Componentes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Paquete Principal"}),(0,i.jsx)(s.br,{}),"\n","El proyecto se inicializa desde el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.main"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Controladores"}),(0,i.jsx)(s.br,{}),"\n","Los controladores est\xe1n ubicados en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.controllers"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Persistencia de Datos"}),(0,i.jsx)(s.br,{}),"\n","El acceso a los datos se maneja de dos maneras:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"JPA"}),": La l\xf3gica de los endpoints que utilizan JPA se encuentra en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.repositories"}),". Este paquete tambi\xe9n contiene las interfaces relacionadas con JDBC."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"JDBC"}),": La interfaz para los m\xe9todos que utilizan JDBC est\xe1 en el archivo ",(0,i.jsx)(s.code,{children:"UserJDBCRepository.java"}),", ubicado en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.repositories"}),". Las implementaciones de estos m\xe9todos est\xe1n en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.implementations"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Entidades"}),(0,i.jsx)(s.br,{}),"\n","Los objetos utilizados para requerir y responder datos est\xe1n en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.entities"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Utilidades"}),(0,i.jsx)(s.br,{}),"\n","Los m\xe9todos y utilidades universales est\xe1n en el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.util"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Interfaces de Active Directory"}),(0,i.jsx)(s.br,{}),"\n","En el paquete ",(0,i.jsx)(s.code,{children:"com.userManager.interfaces"})," se encuentra una clase que act\xfaa como interfaz para las funciones relacionadas con Active Directory de ANTEL."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"descripci\xf3n-de-los-controladores-y-endpoints",children:"Descripci\xf3n de los Controladores y Endpoints"}),"\n",(0,i.jsxs)(s.p,{children:["Para utilizar los endpoints, accede desde la URL: ",(0,i.jsx)(s.code,{children:"http://ip:port/controllerMapping/endpointMapping"}),", donde ",(0,i.jsx)(s.code,{children:"controllerMapping"})," es el valor del controlador, y ",(0,i.jsx)(s.code,{children:"endpointMapping"})," es el valor de la funci\xf3n. Los par\xe1metros se colocan en el body o en la URL, dependiendo del tipo de solicitud (GET, POST, PUT, DELETE)."]}),"\n",(0,i.jsx)(s.h3,{id:"usercontroller-auth",children:"UserController (/auth)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/getUsers"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": GET"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Lista de objetos ",(0,i.jsx)(s.code,{children:"ResponseUser"})," (id, nombre de usuario, primer nombre, apellido, fecha de \xfaltima modificaci\xf3n, fecha de \xfaltimo ingreso, fecha de creaci\xf3n y estado)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Obtiene informaci\xf3n de todos los usuarios registrados en la base de datos, tengan permisos o no."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/login"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": POST"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Objeto ",(0,i.jsx)(s.code,{children:"ReturnUser"})," (nombre de usuario, nombre, apellido, token, estado)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Obtiene la informaci\xf3n del usuario que se acaba de loguear."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/user"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": GET"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"first_name"}),": nombre"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"last_name"}),": apellido."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Objeto ",(0,i.jsx)(s.code,{children:"ResponseUser"})," (id, nombre de usuario, nombre, apellido y estado)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Obtiene la informaci\xf3n del usuario no confidencial."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/updateUser"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": PUT"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"RequestBody"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"permissions"}),": Lista de objetos ",(0,i.jsx)(s.code,{children:"ResponsePermissionCreation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Objeto ",(0,i.jsx)(s.code,{children:"ReturnUser"})," (nombre de usuario, nombre, apellido, token, estado)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Actualiza los permisos de un usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/deleteUser"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": DELETE"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": N\xfamero, 1 si la eliminaci\xf3n es correcta o 0 si fue fallida."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Elimina usuarios de todos los sistemas a la vez."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/createUser"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": PUT"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"first_name"}),": nombre."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"last_name"}),": apellido."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"password"})," (opcional): contrase\xf1a."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"email"})," (opcional): correo electr\xf3nico."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"RequestBody"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"permissions"}),": Lista de objetos ",(0,i.jsx)(s.code,{children:"ResponsePermissionCreation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": N\xfamero, 0 si la creaci\xf3n fue fallida, 1 si la creaci\xf3n fue correcta, 2 si el nombre de usuario ya est\xe1 en uso, 3 si el email ya est\xe1 en uso."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Crea un nuevo usuario. El email y la contrase\xf1a son opcionales."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/validateLogin"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": PUT"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"password"}),": contrase\xf1a."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"systemNumber"}),": n\xfamero de sistema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": N\xfamero, 0 si el login falla, 1 si el login es correcto."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Valida el login de un usuario. Verifica que el usuario y su contrase\xf1a sean v\xe1lidos y que tenga al menos un permiso para el sistema al que ingresa."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/changePassword"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": PUT"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"email"}),": correo electr\xf3nico."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": N\xfamero, 0 si el login falla, 1 si se envi\xf3 el email con una contrase\xf1a temporal, 2 si el usuario es de NTDOM y debe cambiarla en otro lugar."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Comienza el proceso de cambio de contrase\xf1a, v\xe1lido solo para usuarios externos a NTDOM."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/updatePassword"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": POST"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"password"}),": contrase\xf1a temporal."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"newPassword"}),": nueva contrase\xf1a."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": N\xfamero, 0 si el cambio de contrase\xf1a falla, 1 si el cambio de contrase\xf1a es correcto."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Realiza el cambio de contrase\xf1a para usuarios externos a NTDOM."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/insertUserLog"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": POST"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"item"}),": \xedtem del sistema al que ingresa."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"subItem"}),": sub\xedtem del sistema al que ingresa."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"subSubItem"}),": sub-sub\xedtem del sistema al que ingresa."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"route"}),": ruta del sistema al que ingresa."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"sysName"}),": nombre del sistema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": ",(0,i.jsx)(s.code,{children:"void"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Registra logs de usuarios cada vez que ingresan a una pesta\xf1a de un sistema."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"permissionscontroller-permission",children:"PermissionsController (/permission)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/getPermissions"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": GET"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"systemNumber"}),": nombre del sistema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Mapa con un string y una lista de mapas de string que conforman los permisos de cada uno de los sistemas seg\xfan el sistema y usuario consultados."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Obtiene los permisos de un sistema espec\xedfico para un usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios, Dashboard, New Portal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/getPermissionsCreation"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Tipo"}),": GET"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Par\xe1metros"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"}),": nombre de usuario."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"systemNumber"}),": nombre del sistema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Retorno"}),": Retorna un mapa con un string y una lista de mapas de string que conforman los permisos de todos los sistemas de un usuario o vac\xedos para un nuevo usuario."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Descripci\xf3n"}),": Este endpoint se utiliza para obtener los permisos de todos los sistemas correspondientes a un usuario en particular. Se usa para la actualizaci\xf3n y creaci\xf3n de usuarios."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"D\xf3nde se utiliza"}),": Sistema de Gesti\xf3n de Usuarios"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var i=n(6540);const r={},l=i.createContext(r);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);