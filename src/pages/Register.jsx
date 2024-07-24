import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    imagePath: "",
    price: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!productData.title) {
      setErrorMessage("Todos los campos son requeridos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/Register",
        productData
      );

      if (response.data.success) {
        setSuccessMessage("Lista creada con éxito");
        setProductData({ title: "", description: "", imagePath: "", price: 0 });
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error("Error creating list:", error);
      setErrorMessage("Error al crear la lista");
    }
  };

  return (
    <div className="Abouttitle">
      <div className="Abouttile2">
        <h2>Hola Administrador - Podes generar una nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imagePath">Ruta de la imagen:</label>
            <input
              type="text"
              id="imagePath"
              value={productData.imagePath}
              onChange={(e) =>
                setProductData({ ...productData, imagePath: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              id="price"
              value={productData.price}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: parseInt(e.target.value),
                })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Guardar Lista
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
