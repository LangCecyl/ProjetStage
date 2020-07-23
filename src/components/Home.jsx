import React from "react";
import NavbarMenuBurger from "../components/Navbar";
import { Button } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <NavbarMenuBurger />
      <h2>Bienvenue sur mon portfolio</h2>
      <div>
        <img className="basDePage" src="https://www.ynov.com/wp-content/uploads/2018/01/banniere_ydays.png" alt="zz" />
      </div>
    </div>


  );
}

export default Home;
