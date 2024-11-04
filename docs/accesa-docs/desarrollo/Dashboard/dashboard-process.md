---
id: dashboard-process
title: Documentación de los Endpoint del Dashboard Process
---

# Documentación de los Endpoint del Dashboard Process

## Introducción

El proyecto es un proceso que se encarga de cargar información desde las distintas plataformas (ucontact, ipcontact, genesys) hacia las tablas que se utilizan en el Dashboard Accesa. Por otro lado, contiene endpoints que se utilizan tanto para obtener información útil para el mismo dashboard, como para procesos internos de la empresa que requieren información de genesys.

## Requisitos

El proyecto está realizado con:
- Java 17.
- Spring Boot 3.3.0.
- Maven.

## Instalación

El proyecto se encuentra en [Github](https://github.com/Accesa-Desarrollo/Dashboard-Process), se debe clonar el repo. Es necesario tener instalado Java 17.

## Configuración

El proyecto cuenta con un archivo `application.properties` de raíz. Además de este, se encuentran dos archivos `.properties` (`application-dev.properties` y `application-prod.properties`). En la raíz, se le agrega un valor a la variable `spring.profiles.active`, que puede ser `dev` o `prod`. De esto depende a qué archivo `.properties` apuntará el proyecto.

Dentro de los `.properties` se encuentran datos sensibles (acceso a base de datos, API keys) y globales (como los drivers).

## Uso

Para inicializar el proyecto, con el mismo abierto en un IDE, haz clic derecho en la clase `DashboardProcessApplication.java` -> `Run as` -> `Java Application` o `Spring Boot App`.

## Estructura de Componentes

El proyecto se inicializa desde el paquete `com.main`. Los controladores correspondientes se encuentran en `com.controllers`. La lógica de los endpoints que se encuentran en los controladores está en el paquete `com.APIServicesImpl`. Los objetos a utilizar para requerir y responder datos se encuentran en el paquete `com.beans`.

## Descripción de los controladores y endpoints

Para utilizar los endpoints, se accede desde la URL: `<code>http://ip:port/controllerMapping/endpointMapping</code>`. Siendo `controllerMapping` el valor del controlador y `endpointMapping` el valor de la función.

Dependiendo de si es `GET` o `POST`, se colocarán los parámetros (en el body o en la URL).

## CallsEncuestaController (`/callsEncuesta`)

### `getCalls`
- **Tipo**: GET
- **Parámetros**:
  - `minutos`: cantidad de minutos a restar a la hora actual (el intervalo sería desde la fecha actual menos la cantidad de minutos, hasta el momento en que se realiza la request).
  - `porcentaje`: refiere a la cantidad de llamadas que se necesitan obtener.
  - `service`: servicio de la plataforma Genesys.
  - `encuesta`: tipo de encuesta (SMS, VB o Fijo).
- **Retorno**: Retorna una lista de objetos de tipo `CallsEncuestaBean` (idLlamada, número de teléfono, id del agente, fecha y habilidad –queue–).
- **Descripción**: Este endpoint se utiliza para obtener información de las llamadas que cumplen los parámetros mencionados anteriormente.
- **Dónde se utiliza**: Proceso `CargaEncuestasPorSms`.

### `getCallById`
- **Tipo**: GET
- **Parámetros**:
  - `callID`: id de la llamada a consultar (de Genesys).
- **Retorno**: Retorna un objeto de tipo `CallsEncuestaBean` (idLlamada, número de teléfono, id del agente, fecha y habilidad –queue–).
- **Descripción**: Este endpoint se utiliza para obtener información de una llamada específica por ID para la plataforma Genesys.
- **Dónde se utiliza**: Proceso `ReporteEncuesta`.

### `getChatsOffered`
- **Tipo**: GET
- **Parámetros**:
  - `from`: fecha desde (formato YYYY-MM-DD).
  - `to`: fecha hasta (formato YYYY-MM-DD).
  - `accumulated`: booleano que retorna información acumulada por día o sumada en el rango.
- **Retorno**: Retorna una colección con los valores de fecha (por día o del rango total), y la cantidad de chats ofrecidos.
- **Descripción**: Este endpoint se utiliza para obtener la cantidad de chats ofrecidos en un rango de días, de forma acumulada o detallada por día.
- **Dónde se utiliza**: Proceso `ReporteEncuesta`.

### `getCallsSummary`
- **Tipo**: GET
- **Parámetros**:
  - `day`: fecha en formato YYYY-MM-DD.
  - `service`: servicio de Genesys.
- **Retorno**: Retorna un objeto de tipo `CallsSummaryBean` (ofrecidas a móviles, contestadas desde móviles, ofrecidas a fijos, contestadas desde fijos).
- **Descripción**: Este endpoint se utiliza para obtener el resumen de llamadas del día anterior.
- **Dónde se utiliza**: Proceso `ReporteEncuesta`.

## RealTimeController (`/realTime`)

### `getRealTime`
- **Tipo**: GET
- **Parámetros**:
  - `platform`: plataforma a consultar (ipcontact, ucontact, genesys).
  - `service`: servicio a consultar.
- **Retorno**: Retorna un JSON que contiene la cantidad de agentes disponibles, no disponibles, interactuando y la cantidad de clientes en espera para el servicio y plataforma requerida.
- **Descripción**: Este endpoint se utiliza para obtener información específica en tiempo real de un servicio.
- **Dónde se utiliza**: Frontend Dashboard (Sección Hoy -> En este momento).

## SpeechController (`/speech`)

### `getCalls`
- **Tipo**: POST
- **Parámetros** (en el body):
  - `SpeechRequest`: specificDay, service, quantCalls.
    - `specificDay`: fecha en formato YYYY-MM-DD.
    - `service`: servicio de Genesys.
    - `quantCalls`: cantidad de información a obtener.
- **Retorno**: Retorna una lista de tipo `SpeechResponse` (uniqueID, startDate, endDate, agentName, agentID, ani, dnis, campana, holdTime, extensión, direction, waitTime, duracionGrabacion, filename, motivoCierre, origenCorte, duracionTotal), que refiere a información específica de cada llamada. Dnis es el servicio, direction es si la llamada es saliente (2) o entrante (1).
- **Descripción**: Este endpoint se utiliza para obtener información de una cantidad específica de llamadas, para un servicio y un día.
- **Dónde se utiliza**: Proceso `ProcesoCargaGrabacionesSpeechAnalytics`.

## Servicios y Dependencias

Las dependencias utilizadas en el proyecto se encuentran en el `pom.xml`.

## Pruebas

[Instrucciones para correr pruebas funcionales, unitarias y de integración.]

## Despliegue

El despliegue es realizado con Docker por el Jefe de Desarrollo.
