import React from "react";
import NavbarMenuBurger from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <NavbarMenuBurger />
      <h2 className="titleHome">Bienvenue sur mon Portfolio</h2>
      <div>

        <script src="src/index.js"></script>
        <div class="loading-animation">
          <div>W</div>
          <div>E</div>
          <div>L</div>
          <div>C</div>
          <div>O</div>
          <div>M</div>
          <div>E</div>
        </div>
      </div>
      
      <div>
        <img className="basDePage" src="https://www.ynov.com/wp-content/uploads/2018/01/banniere_ydays.png" alt="zz" />
      </div>

    </div>

  );
}

export default Home;
