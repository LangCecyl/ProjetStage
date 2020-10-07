import React from "react";
import NavbarMenuBurger from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="Home">
        <NavbarMenuBurger />
        <h2 className="titleHome">Bienvenue sur Bpifrance</h2>

      </div>

      <div>
        L'app qui vous permet de savoir tout sur les cookies utiliser sur les sites Bpifrance
      </div>


      <div className="homeCaseH"> 

        <div>
          <section class="ds-card ds-card--8dp">
            <div class="ds-card__content">
              <h6 class="ds-card__title">Sites Bpifrance</h6>
              <p>Consulte la liste des sites Bpifrance</p>
            </div>
            <div class="ds-card__action">
              <button class="ds-btn ds-btn--primary">Acceder</button>
            </div>
          </section>
        </div>

        <div>
          <section className="ds-card ds-card--8dp">
            <div className="ds-card__content">
              <h6 className="ds-card__title">Les Cookies</h6>
              <p>Consulte la liste des cookies deployer sur les sites de Bpifrance</p>
            </div>
            <div className="ds-card__action">
              <button className="ds-btn ds-btn--primary">Acceder</button>
            </div>
          </section>
        </div>

      </div>


      <div className="homeCaseB">

        <div>
          <section className="ds-card ds-card--8dp">
            <div className="ds-card__content">
              <h6 className="ds-card__title">Ajouter un nouveau site</h6>
              <p>Ajoute un nouveau site a la liste des sites de Bpifrance</p>
            </div>
            <div className="ds-card__action">
              <button className="ds-btn ds-btn--primary">Ajouter</button>
            </div>
          </section>
        </div>


        <div>
          <section className="ds-card ds-card--8dp">
            <div className="ds-card__content">
              <h6 className="ds-card__title">Ajoute un nouveau cookie</h6>
              <p>Ajoute un nouveau cookie a la liste des cookies deployer sur les sites de Bpifrance</p>
            </div>
            <div className="ds-card__action">
              <button className="ds-btn ds-btn--primary">Ajouter</button>
            </div>
          </section>
        </div>

      </div>


    </div>

  );
}

export default Home;
