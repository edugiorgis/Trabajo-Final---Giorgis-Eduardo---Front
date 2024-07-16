import { Button, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import "../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/Login", {
        email,
        password,
      });
      if (response.data.success) {
        setSuccessMessage(
          "Usuario ingreso sesión con exito - Te estamos redirigiendo"
        );
        setTimeout(() => {
          navigate("/Succesful");
        }, 3000);
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage(
          "Error validar usuario - Te estamos redirigiendo, para que puedas volver a intentar"
        );
        setTimeout(() => {
          navigate("/Buy");
        }, 3000);
      }
    }
  };

  return (
    <div className="Initiallogin">
      <form onSubmit={handleSubmit}>
        <div className="Initialform">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <Input.Password
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              onIconClick={() => setPasswordVisible(!passwordVisible)}
            />
          </label>
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
              Ingresar
            </Button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
