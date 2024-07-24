import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Products");
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setErrorMessage("Error al obtener los productos");
      }
    };

    fetchProducts();
  }, []);

  if (errorMessage) {
    return <div className="error-message">{errorMessage}</div>;
  }

  if (productList.length === 0) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="products-list">
      {productList.map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-image">
            <img src={product.imagePath} alt={product.title} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span className="price">Precio: ${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
