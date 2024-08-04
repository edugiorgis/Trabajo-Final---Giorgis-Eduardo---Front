import { Link, Outlet } from "react-router-dom";
import "../styles.css";
import logoImage from "../assets/Photos/Logo.jpeg";
import BannerInitial from "./BannerInitial";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <div className="carousel-container">
          <BannerInitial />
        </div>
        <div className="header-container">
          <img src={logoImage} alt="Your Logo" className="logo" />
          <p>Generando Momentos</p>
          <ul className="nav-linksaccount">
            <li>
              <Link to="/initiallogin">CREAR CUENTA</Link>
            </li>
            <li>
              <Link to="/login">INICIAR SESIÓN</Link>
            </li>
          </ul>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/banner">INICIO</Link>
          </li>
          <li>
            <Link to="/">TIENDA</Link>
          </li>
          <li>
            <Link to="/about">NOSOTROS</Link>
          </li>
          <li>
            <Link to="/dashboard">NUESTROS PRODUCTOS</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
