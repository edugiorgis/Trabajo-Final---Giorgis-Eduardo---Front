import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className="nav-linksaccount">
      <ul className="nav-linksaccount">
        <li>
          <Link to="/initiallogin">CREAR CUENTA</Link>
        </li>
        <li>
          <Link to="/login">INICIAR SESIÓN</Link>
        </li>
      </ul>
    </div>
  );
};
export default Buy;
