import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextField } from "@mui/material";
import Formulario from "./Formulario/Formulario";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadPath, setUploadPath] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePathChange = (event) => {
    setUploadPath(event.target.value);
  };

  const handleFileUpload = () => {
    if (selectedFile && uploadPath) {
      // Aquí puedes manejar la lógica para guardar el archivo.
      // Por ejemplo, enviarlo a un servidor o almacenarlo localmente en la ruta especificada.
      console.log("Archivo seleccionado:", selectedFile);
      console.log("Ruta de destino:", uploadPath);

      // Resetea el estado después de subir el archivo
      setSelectedFile(null);
      setUploadPath("");
      alert("Archivo subido correctamente!");
    } else {
      alert("Por favor selecciona un archivo y especifica una ruta.");
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
    <div
      style={{
        marginTop: "3em",
        textAlign: "center",
        backgroundColor: "white",
        padding: "5em",
        borderRadius: "50px",
      }}
    >
      <TextField
        label="Ruta de destino"
        variant="standard"
        value={uploadPath}
        onChange={handlePathChange}
        sx={{ marginBottom: "1em", width: "60%" }}
      />
      <div>
        <Button
          sx={{ marginRight: "3em" }}
          component="label"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
        >
          Subir Archivo
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>

        <Button variant="outlined" onClick={handleFileUpload}>
          Listo!
        </Button>
      
        
      </div>
      
    </div>
    </>
      );
};

export default UploadFile;
