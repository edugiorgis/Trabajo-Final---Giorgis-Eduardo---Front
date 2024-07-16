import { Link, Outlet } from "react-router-dom";
import "../styles.css";
import logoImage from "../assets/Photos/Logo.jpeg";
import { Button } from "antd";

const Layout = () => {
  return (
    <div>
      <nav>
        <section className="banner">
          <p> 6 CUOTAS SIN INTERES EN TODO EL SITIO💳</p>
        </section>
        <section className="header-links">
          <section className="headerlogo">
            <img src={logoImage} alt="Your Logo" />
          </section>

          <li>
            <Button
              type="primary"
              style={{
                backgroundColor: "#e8ccbf",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              style={{
                backgroundColor: "#e8ccbf",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Link to="/about">Nosotros</Link>
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              style={{
                backgroundColor: "#e8ccbf",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Link to="/dashboard">Nuestros Productos</Link>
            </Button>
          </li>
        </section>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
