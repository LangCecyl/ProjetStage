import React from "react";
import NavbarMenuBurger from "../components/Navbar";
import { Button } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <NavbarMenuBurger />
      <h2>Bienvenue sur mon portfolio</h2>
      <img url="https://www.ynov.com/wp-content/uploads/2018/01/banniere_ydays.png" alt="zz"/>
    </div>

  );
}

export default Home;
