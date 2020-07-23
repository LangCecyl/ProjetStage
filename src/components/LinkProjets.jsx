import React from "react";
import NavbarMenuBurger from "./Navbar";
import "./LinkProjets.css"

function LinkProjets() {
  return (
    <>
      <NavbarMenuBurger />
      <h1>Mes Projets</h1>

      <div className="cardSite">
        
          <img className="viewSite1" src="https://zupimages.net/up/20/30/k9uy.jpg" alt="telephone" />
        


        <div className="textSite">
          <h3 className="nameSite">Sacrée Campus</h3>
          <p className="descriptSite1">Client : Wild Code School</p>
          <p className="descriptSite">Ce site est un projet d'etude,</p>
          <p className="descriptSite">le premier proposer par la Wild Code School</p>
          <p className="descriptSite">pendant ma formtation.</p>
          <p className="descriptSite">Nous avions 2 semaines en groupe pour</p>
          <p className="descriptSite">faire notre premier projet </p>
        </div>
        <div className="wrap">
          <a className="buttonSite" href="https://brianlag.github.io/sacre-campus/"> Voir l'application</a>
        </div>

      </div>

      <div className="cardSite">
        
          <img className="viewSite2" src="https://zupimages.net/up/20/30/t6z2.png" alt="macbook" />
        



        <div className="textSite">
          <h3 className="nameSite">Heroes Fate</h3>
          <p className="descriptSite1">Client : Wild Code School</p>
          <p className="descriptSite">Ce site est un projet d'etude,</p>
          <p className="descriptSite">le Deuxieme proposer par la Wild Code School</p>
          <p className="descriptSite">pendant ma formtation.</p>
          <p className="descriptSite">Nous avions 2 semaines en groupe pourfaire notre premier projet </p>
          <p className="descriptSite">Nous l'avons fait sous forme de jeux</p>
        </div>
        <div class="wrap">
          <a className="buttonSite" href="https://heroes-fate.netlify.app/">Voir le site</a>
        </div>
      </div>



    </>
  );
}

export default LinkProjets;