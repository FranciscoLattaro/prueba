---
id: APInfancia
title: Dashboard Accesa S.A - Documentación Capital Humano
sidebar_label: Ayuda a Primera Infancia
---

# Proyecto Solicitudes CH

## API Apoyo a la Primera Infancia

### 1. Introducción

### 2. Endpoints

#### `POST /requests/add`

**Parameters:**

- **Key:** files
  - **Type:** File

- **Key:** request
  - **Type:** JSON

**Responses:**

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
   
        "message": "you have to enter a valid amount for your pension."
    
  - **Description:** If pension exists but no amount is provided or if an amount exists but pension does not.

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
      
        "message": "please verify identity cards. applicant/tutor/beneficiary cannot be the same person."
      
    ```
  - **Description:** If documents of tutor/applicant/beneficiary have any match.

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
    ```json
      
        "message": "you have to enter at least one file type."
      
    ```
  - **Description:** If at least one document type is not selected.

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
    ```json
      
        "message": "you have to enter at least one contact number."
      
    ```
  - **Description:** If no contact numbers are entered.

- **Status:** HttpStatus.UNAUTHORIZED 401
  - **Body:**
    ```json
      
        "message": "not eligible. more than   magic_age   years old"
      
    ```
  - **Description:** If applicant is not eligible due to age.

- **Status:** HttpStatus.UNAUTHORIZED 401
  - **Body:**
    ```json
    
    ```
  - **Description:** If a request has already been made for the same child in the same year.

- **Status:** HttpStatus.PAYLOAD_TOO_LARGE 413
  - **Body:**
    ```json
   
    ```
  - **Description:** If more than 10 files are attached.

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
    ```json
    
    ```
  - **Description:** If no files are attached.

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
    ```json
 
    ```
  - **Description:** If a file name exceeds 30 characters.

- **Status:** HttpStatus.UNSUPPORTED_MEDIA_TYPE 415
  - **Body:**
    ```json
 
    ```
  - **Description:** If at least one file has an unsupported format.

- **Status:** HttpStatus.INTERNAL_SERVER_ERROR 500
  - **Body:**
    ```json
 
    ```
  - **Description:** If there was an issue processing files on the server side.

- **Status:** HttpStatus.CREATED 201
  - **Body:**
    ```json
  
    ```
  - **Description:** If the request was successfully created.

- **Status:** HttpStatus.BAD_REQUEST 400
  - **Body:**
    ```json
   
    ```
  - **Description:** If tutor data is inconsistent.

#### `PUT /requests/  id  /approve`

**Parameters:**

- **  id  ** (Path Parameter): The request id to approve
  - **Type:** String

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
    
    ```
  - **Description:** If the request id does not exist.

- **Status:** HttpStatus.UNAUTHORIZED 401
  - **Body:**
    ```json
   
    ```
  - **Description:** If the request to be approved does not have status 0 (pending).

- **Status:** HttpStatus.OK 200
  - **Body:**
    ```json
   
    ```
  - **Description:** If the approval is successful.

#### `PUT /requests/  id  /close`

**Parameters:**

- **  id  ** (Path Parameter)
  - **Type:** String

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
   
    ```
  - **Description:** If the request id does not exist.

- **Status:** HttpStatus.UNAUTHORIZED 401
  - **Body:**
    ```json
    
    ```
  - **Description:** If the request to be closed does not have status 0 (pending).

- **Status:** HttpStatus.OK 200
  - **Body:**
    ```json
   
    ```
  - **Description:** If the closure is successful.

#### `GET /requests/exists`

**Parameters:**

- **Key:** request_date
  - **Type:** Date (YYYY-MM-DD)
  - **Description:** Date of the request in the format YYYY-MM-DD.

- **Key:** identity_card
  - **Type:** String
  - **Description:** Identity card or ID associated with the request.

**Responses:**

- **Status:** HttpStatus.OK 200
  - **Body:**
    ```json
    
    ```
  - **Description:** Indicates that a request exists for the given year and child.

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
   
    ```
  - **Description:** Indicates that no request was found for the specified year and child.

#### `GET /requests/files/  id  /download`

**Parameters:**

- **  id  ** (Path Parameter): ID of the file

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
  
    ```
  - **Description:** If the file ID is not found.

#### `GET /requests/  request_id  `

**Parameters:**

- **  request_id  ** (Path Parameter): ID of the request to search
  - **Type:** String

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
   
    ```
  - **Description:** If no request is found.

#### `GET /requests/filelist/  request_id  `

**Parameters:**

- **  request_id  ** (Path Parameter)

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
  
    ```
  - **Description:** If no files are found.

- **Status:** HttpStatus.OK 200
  - **Body:**
    ```json
  
    ```
  - **Description:** List of files.

#### `GET /requests/all`

**Responses:**

- **Status:** HttpStatus.NOT_FOUND 404
  - **Body:**
    ```json
   
    ```
  - **Description:** If no requests are found.

#### `GET /requests/with-filters`

**Parameters:**

- **Key:** request_date_from
  - **Type:** Date (YYYY-MM-DD)
  - **Description:** Starting date of the request in the format YYYY-MM-DD.

- **Key:** request_date_to
  - **Type:** Date (YYYY-MM-DD)
  - **Description:** Ending date of the request in the format YYYY-MM-DD.

- **Key:** identity_card
  - **Type:** String
  - **Description:** Identity card associated with the request.

- **Key:** request_status
  - **Type:** String
  - **Description:** Request status. Available options: "PENDIENTE", "CERRADA", "APROBADA".

- **Key:** applicant_location
  - **Type:** String
  - **Description:** User location.

- **Key:** applicant_name
  - **Type:** String
  - **Description:** Name of the applicant.

**Responses:**

- **Status:** HttpStatus.OK 200
  - **Body:**
    ```json
    
    ```
  - **Description:** List of requests.

### 3. Consultas sobre el endpoint

Para consultar un endpoint específico, sigue el formato de consulta que se ajuste al método HTTP y los parámetros requeridos.

### 4. Consideraciones Finales

Asegúrate de que todos los parámetros y respuestas de los endpoints estén correctamente documentados y actualizados. Verifica también que los métodos de prueba y los datos de prueba se ajusten a la estructura esperada.

---

**Notas:**

- **Asegúrate de que el archivo MDX esté bien formateado y no contenga errores de sintaxis.**
- **Realiza pruebas para verificar que los cambios no rompan el funcionamiento del proyecto.**
- **Revisa la configuración de Docusaurus y cualquier otra posible fuente de errores.**
