import React, { useState } from "react";
import { Button, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateField = (fieldName, fieldValue) => {
    switch (fieldName) {
      case "nombre":
      case "apellido":
        return fieldValue.length < 3 ? "Debe tener al menos 3 caracteres" : "";
      case "dni":
        return /^\d{8}$/.test(fieldValue) ? "" : "DNI debe tener 8 dígitos";
      case "celular":
        return /^\d{10,11}$/.test(fieldValue)
          ? ""
          : "Celular debe tener entre 10 y 11 dígitos";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)
          ? ""
          : "Ingrese un email válido debe contener @ y .com";
      case "password":
        return fieldValue.length === 0
          ? "La contraseña no puede estar vacía"
          : fieldValue.length < 8
          ? "La contraseña debe tener al menos 8 caracteres"
          : "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/InitialLogin",
        userData
      );
      setSuccessMessage("Usuario creado exitosamente. Redirigiendo...");
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error) {
      setSuccessMessage("Error al crear usuario. Intente nuevamente.");
    }
  };

  return (
    <div className="Initiallogin">
      <form onSubmit={handleSubmit}>
        <div className="Initialform">
          <label>
            NOMBRE:
            <input
              name="nombre"
              value={userData.nombre}
              style={{ width: "500px", height: "30px" }}
              type="text"
              onChange={handleChange}
              required
            />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
          </label>
          <label>
            APELLIDO:
            <input
              name="apellido"
              value={userData.apellido}
              style={{ width: "500px", height: "30px" }}
              type="text"
              onChange={handleChange}
              required
            />
            {errors.apellido && (
              <p style={{ color: "red" }}>{errors.apellido}</p>
            )}
          </label>
          <label>
            DNI:
            <input
              name="dni"
              value={userData.dni}
              style={{ width: "500px", height: "30px" }}
              type="number"
              onChange={handleChange}
              required
            />
            {errors.dni && <p style={{ color: "red" }}>{errors.dni}</p>}
          </label>
          <label>
            CELULAR:
            <input
              name="celular"
              value={userData.celular}
              style={{ width: "500px", height: "30px" }}
              type="number"
              onChange={handleChange}
              required
            />
            {errors.celular && <p style={{ color: "red" }}>{errors.celular}</p>}
          </label>
          <label>
            EMAIL:
            <input
              name="email"
              value={userData.email}
              style={{ width: "500px", height: "30px" }}
              type="email"
              onChange={handleChange}
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </label>
          <label>
            CONTRASEÑA:
            <Input.Password
              name="password"
              value={userData.password}
              style={{ width: "500px", height: "30px" }}
              type={passwordVisible ? "text" : "password"}
              onChange={handleChange}
              required
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  />
                ) : (
                  <EyeInvisibleOutlined
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  />
                )
              }
            />
            {errors.password && (
              <p style={{ color: "red" }}>
                {errors.password === ""
                  ? "La contraseña no puede estar vacía"
                  : errors.password}
              </p>
            )}
          </label>
        </div>
        <div className="successMessage">
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
              width: "500px",
              height: "30px",
            }}
            onClick={handleSubmit}
          >
            CREAR CUENTA
          </Button>
        </div>
      </form>
      <div className="Account">
        <h1>¿No tenés cuenta?</h1>
        <ul className="nav-linksaccount">
          <li>
            <Link to="/login">INICIA SESIÓN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InitialLogin;
