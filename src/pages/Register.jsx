import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
import { Button } from "antd";

const Register = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [productList, setProductList] = useState([]); // New state for product list

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
        setProductData({ title: "", description: "", price: 0 });

        // Fetch product list after successful creation
        try {
          const productListResponse = await axios.get(
            "http://localhost:8080/products"
          );
          setProductList(productListResponse.data);
        } catch (error) {
          console.error("Error fetching products:", error);
          setErrorMessage("Error al obtener los productos");
        }
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error("Error creating list:", error);
      setErrorMessage("Error al crear la lista");
    }
  };

  return (
    <div className="Initiallogin">
      <h2>Hola Administrador - Podes generar una nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="Initialform">
          <label htmlFor="title">TÍTULO:</label>
          <input
            type="text"
            id="title"
            style={{ width: "500px", height: "30px" }}
            value={productData.title}
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
            required
          />

          <label htmlFor="description">DESCRIPCIÓN:</label>
          <input
            type="text"
            id="description"
            style={{ width: "500px", height: "30px" }}
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            required
          />
          <label htmlFor="price">PRECIO:</label>
          <input
            type="number"
            id="price"
            style={{ width: "500px", height: "30px" }}
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
        <div className="successMessage">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
        <div className="Buttoninitiallogin">
          <Button
            type="primary"
            style={{
              backgroundColor: "#e8ccbf",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            GUARDAR LISTA
          </Button>
        </div>

        {successMessage && productList.length > 0 && (
          <div className="cards-container">
            {productList.map((product) => (
              <div className="card-container" key={product.id}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p className="product-price">Precio: ${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
