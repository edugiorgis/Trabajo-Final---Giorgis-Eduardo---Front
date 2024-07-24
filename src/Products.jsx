import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image">
            <img src={product.imagePath} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
