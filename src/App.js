import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Função para lidar com o upload da imagem
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Pega o primeiro arquivo
    if (file) {
      setImage(file); // Armazena a imagem no estado
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Atualiza o preview com o conteúdo da imagem
      };
      reader.readAsDataURL(file); // Lê o arquivo como URL
    }
  };

  // Função para remover a imagem
  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div style={styles.container}>
      <h2>Upload de Imagem</h2>
      <input type="file" onChange={handleImageUpload} />
      {preview && (
        <div style={styles.previewContainer}>
          <h3>Pré-visualização:</h3>
          <img
            src={preview}
            alt="Pré-visualização"
            style={styles.previewImage}
          />
          <button style={styles.removeButton} onClick={removeImage}>
            Remover Imagem
          </button>
        </div>
      )}
    </div>
  );
};

// Estilos simples em JS
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  previewContainer: {
    marginTop: "20px",
  },
  previewImage: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  removeButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
