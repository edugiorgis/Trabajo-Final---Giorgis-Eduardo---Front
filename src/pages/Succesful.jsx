import React from "react";
import { useUserStore } from "../useUserStore";
import "../styles.css";
import { Image, Avatar, List } from "antd";
import { useCartStore } from "../useCartStore";

const Succesful = () => {
  const { token } = useUserStore();
  const { userName } = useUserStore();
  const { products } = useCartStore();
  console.log(token);
  console.log(userName);
  console.log(products);
  return (
    <div className="Succesful">
      <div className="SuccessMessage">
        <h2>{userName} - Gracias por tu compra</h2>
        <h2>Estamos preparando los siguientes productos para vos</h2>
      </div>
      <div className="ProductsList">
        {products.map((product, index) => (
          <div key={index} className="Product">
            <div className="ProductContent">
              <Avatar src={`http://localhost:8080${product.imagePath}`} />
              <div className="ProductDetails">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Succesful;
