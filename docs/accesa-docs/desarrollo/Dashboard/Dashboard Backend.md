---
id: dashboard-accesa
title: Dashboard Accesa S.A - Documentación Capital Humano
sidebar_label: Capital Humano
---

# Documentación CAPITAL HUMANO

## Índice

- [Ausentismos](#ausentismos)
  - [Filtros](#filtros)
  - [Reporte](#reporte)

- [Incidencias](#incidencias)
  - [Reporte](#reporte-1)

- [Incumplimientos](#incumplimientos)
  - [Reporte](#reporte-2)

## Ausentismos

### Filtros

:::note
*Todos los endpoints son GET*
:::

---

**Endpoint:** `http://ip:port/filters/getLocations`  
- Retorna una lista con las **sucursales de la empresa**.

**Parámetros:**  
> No recibe parámetros

---

**Endpoint:** `http://ip:port/filters/getDepartments`  
- Retorna una lista con los **departamentos de la empresa**.

**Parámetros:**  
> No recibe parámetros

---

**Endpoint:** `http://ip:port/filters/getGenericDays`  
- Retorna una lista con los filtros **“tipos de días”** para el **reporte genérico**.

**Parámetros:**  
> No recibe parámetros

---

**Endpoint:** `http://ip:port/filters/getPaidDays`  
- Retorna una lista con los filtros **“tipos de días”** para el **reporte de retribuidas**.

**Parámetros:**  
> No recibe parámetros

---

**Endpoint:** `http://ip:port/filters/getNonPaidDays`  
- Retorna una lista con los filtros **“tipos de días”** para el **reporte de no retribuidas**.

**Parámetros:**  
> No recibe parámetros

---

### Reporte

:::note
El siguiente endpoint es un POST
:::

**Endpoint:** `http://ip:port/ausentismos/get`  
- Retorna reporte de ausentismos (año, mes, laborables, inasistencias, ausentismo (%)).

**Parámetros:**

> `from`: Fecha desde la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  
> `to`: Fecha hasta la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  
> `location`: Sucursal de la empresa.  
> `department`: Departamento de la empresa.  

**Cuerpo:**

> `days`: Filtros de reporte (tipos de días) en formato **List&lt;DaysReturn&gt; (String day, boolean esLaborable, boolean esInasistencia, String code)**

---

## Incidencias

### Reporte

:::note
El siguiente endpoint es un GET
:::

**Endpoint:** `http://ip:port/incidencias/get`  
- Retorna reporte de incidencias.

**Parámetros:**

> `from`: Fecha desde la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  
> `to`: Fecha hasta la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  

---

## Incumplimientos

### Reporte

:::note
El siguiente endpoint es un GET
:::

**Endpoint:** `http://ip:port/incumplimientos/get`  
- Retorna reporte de incumplimientos.

**Parámetros:**

> `from`: Fecha desde la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  
> `to`: Fecha hasta la cual se quiere obtener el reporte, en formato 'AAAA-MM'.  
> `departamentos`: Departamentos para los cuales se quiere obtener el reporte.  
  - `1`: Todos los departamentos SIN confidenciales.  
  - `2`: Solo confidenciales.  
  - `3`: Todos los departamentos CON confidenciales.  
