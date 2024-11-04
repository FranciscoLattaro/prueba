import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Formulario = () => {
  const [documentacion, setDocumentacion] = useState({
    titulo: "",
    introduccion: "",
    requisitos: "",
    instalacion: "",
    configuracion: "",
    uso: "",
    estructuraComponentes: "",
    serviciosDependencias: "",
    pruebas: "",
    despliegue: "",
    baseDatos: "",
    ipInvolucradas: "",
  });

  const handleChange = (e) => {
    setDocumentacion({
      ...documentacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Documentación guardada:", documentacion);
  };

  const textAreaStyle = {
    resize: "both", // Permite redimensionar tanto vertical como horizontalmente
    minHeight: "5em", // Altura mínima de 5 em
  };

  return (
    <div style={{ padding: '1em 2em', backgroundColor: 'white' }}>
      <TextField
        label="Proyecto:"
        name="titulo"
        multiline
        fullWidth
        value={documentacion.titulo}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Introducción"
        name="introduccion"
        multiline
        fullWidth
        value={documentacion.introduccion}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Requisitos"
        name="requisitos"
        multiline
        fullWidth
        value={documentacion.requisitos}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Instalación"
        name="instalacion"
        multiline
        fullWidth
        value={documentacion.instalacion}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Configuración"
        name="configuracion"
        multiline
        fullWidth
        value={documentacion.configuracion}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Uso"
        name="uso"
        multiline
        fullWidth
        value={documentacion.uso}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Estructura de Componentes"
        name="estructuraComponentes"
        multiline
        fullWidth
        value={documentacion.estructuraComponentes}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Servicios y Dependencias"
        name="serviciosDependencias"
        multiline
        fullWidth
        value={documentacion.serviciosDependencias}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Pruebas"
        name="pruebas"
        multiline
        fullWidth
        value={documentacion.pruebas}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Despliegue"
        name="despliegue"
        multiline
        fullWidth
        value={documentacion.despliegue}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Base de Datos involucrada"
        name="baseDatos"
        multiline
        fullWidth
        value={documentacion.baseDatos}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <TextField
        label="Las IP involucradas son"
        name="ipInvolucradas"
        multiline
        fullWidth
        value={documentacion.ipInvolucradas}
        onChange={handleChange}
        margin="normal"
        sx={{ ...textAreaStyle }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: "20px" }}
      >
        Guardar Documentación
      </Button>
    </div>
  );
};

export default Formulario;
