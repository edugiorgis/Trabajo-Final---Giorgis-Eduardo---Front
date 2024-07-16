import React from "react";
import "../styles.css";
import productImage from "../assets/Photos/PlateProducts.jpeg";
import productImage2 from "../assets/Photos/Taza.jpeg";

const Dashboard = () => {
  return (
    <div className="Product">
      <h2>NUESTROS PRODUCTOS</h2>
      <div className="Product1">
        <h3>Platos</h3>
        <img
          src={productImage}
          alt="Plato"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <h2>
          Inspirado En líneas simples y sencillas cruzadas , para una decoración
          delicada hecha a mano.
        </h2>
      </div>
      <div className="Product2">
        <h1>Tazas</h1>
        <img
          src={productImage2}
          alt="Taza"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <h2>
          De lo simple en su forma lisa , resaltando los colores que más nos
          gusta trabajar y que hacen parte de Embarrate Cerámica.
        </h2>
      </div>
    </div>
  );
};
export default Dashboard;
