import React from "react";
import NavbarMenuBurger from "./Navbar";
import "./LinkCV.css";

function LinkCV() {
  return (
    <>
      <NavbarMenuBurger />

      <h1>Curriculum Vitae</h1>

      <section className="CV">
        <h2 className="titleCV">Developper Web et Mobile</h2>

        <section>
          <h3 className="CategorieCV">Compétence professionnelles</h3>
          <div className="CadreCompetence">
            <p>Concevoir des pages web avec plusieur langages</p>
            <p>Utiliser la bibliothéque jQuery pour gagner en productivité</p>
            <p>Developper une page web dynamique, responsive et interactives</p>
            <p>Concevoir des bases de données</p>
          </div>

        </section>

        <h3 className="CategorieCV">Formation et diplomes</h3>
        <div>
          <p><span className="dateCV">2020</span> : Formation développeur web et mobile - Wild Code School (Reims)</p>
          <p><span className="dateCV">2019</span> : RAN Numerique et Codage - Alméa (Châlons-en-champagne)</p>
          <p><span className="dateCV">2018</span> : CACES 1 . 3 . 5 </p>
          <p><span className="dateCV">2014</span> : Niveau Bac professionnel Vente - Lycée Joliot curie (Reims)</p>
          <p><span className="dateCV">2013</span> : BEP Métiers de la Relation aux Clients aux Usagers - Lycée Joliot curie (Reims)</p>
        </div>

        <h3 className="CategorieCV">Expérience professionnelles</h3>
        <div>
          <p><span className="dateCV">2019</span> : Developper (Stage)</p>
          <p className="deuxiemeLigne">BPI France (Banque Publique d'investissement</p>
          <p><span className="dateCV">2014/2019</span> : Agent logistique, Cariste (Interim, CDD)</p>
          <p className="deuxiemeLigne">Scap-est / Joseph-Perrier / FM Logistic / Mc Cain / XPO</p>
          <p><span className="dateCV">2015/2016/2017/2019</span> : Vendangeur (Cueilleur et Porteur)</p>
        </div>

        <h3 className="CategorieCV">Centre d'intérêts</h3>
        <p>Streamer, affilié Twitch</p>
        <p>Créateur de contenue pour Epic Game</p>

      </section>

    </>
  );
}

export default LinkCV;
