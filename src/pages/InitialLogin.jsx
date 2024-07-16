import { Button, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const InitialLogin = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    celular: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/InitialLogin",
        userData
      );

      console.log(response.data);
      setSuccessMessage(
        "Usuario creado exitosamente - Te estamos redirigiendo - Favor Iniciar Sesión"
      );
      setTimeout(() => {
        navigate("/Login");
      }, 4000);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        navigate("/Buy");
      }, 4000);
      setSuccessMessage(
        "Error al crear usuario - Te estamos redirigiendo, para que puedas crear usuario nuevamente"
      );
    }
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="Initiallogin">
      <form onSubmit={handleSubmit}>
        <div className="Initialform">
          <label>
            Nombre:
            <input name="nombre" type="text" onChange={handleChange} required />
          </label>
          <label>
            Apellido:
            <input
              name="apellido"
              type="text"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            DNI:
            <input name="dni" type="number" onChange={handleChange} required />
          </label>
          <label>
            Celular:
            <input
              name="celular"
              type="number"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input name="email" type="email" onChange={handleChange} required />
          </label>
          <label>
            Contraseña:
            <Input.Password
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              onIconClick={() => setPasswordVisible(!passwordVisible)}
            />
          </label>
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
            Registrarse
          </Button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default InitialLogin;
