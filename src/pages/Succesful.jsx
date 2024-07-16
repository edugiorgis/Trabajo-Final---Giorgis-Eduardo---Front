import React from "react";
import "../styles.css";
import Paquete from "../assets/Photos/Paquete.jpeg";

const Succesful = () => {
  return (
    <div className="Abouttitle">
      <div className="Abouttile2">
        <h2>Sesión Iniciada con exito - Tu compra llegara mañana</h2>
      </div>
      <div className="Pack">
        <img src={Paquete} alt="Paquete" />
      </div>
    </div>
  );
};
export default Succesful;
