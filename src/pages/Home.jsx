import React from "react";
import AppNew from "../AppNew.jsx";
import "../styles.css";

const Home = () => {
  return (
    <main>
      <section className="header-container">
        <h1>LOS MEJORES PRODUCTOS PARA TU HOGAR</h1>
      </section>
      <div className="Filter">
        <AppNew />
      </div>
      <div className="footer">
        <h1>COPYRIGHT PICCASO - 2024. TODOS LOS DERECHOS RESERVADOS.</h1>
      </div>
    </main>
  );
};
export default Home;
