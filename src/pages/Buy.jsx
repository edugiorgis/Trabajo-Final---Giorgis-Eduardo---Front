import React from "react";
import "../styles.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const NewLoginClick = () => {
    navigate("/InitialLogin");
  };
  return (
    <div className="Buylogin">
      <div className="Buttonbuy">
        <Button
          type="primary"
          style={{
            backgroundColor: "#e8ccbf",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleLoginClick}
        >
          Iniciar sesión
        </Button>
        <Button
          type="primary"
          style={{
            backgroundColor: "#e8ccbf",
            border: "none",
            cursor: "pointer",
          }}
          onClick={NewLoginClick}
        >
          Nuevo usuario
        </Button>
      </div>
    </div>
  );
};
export default Buy;
