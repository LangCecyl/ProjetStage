import React from "react";
import NavbarMenuBurger from "./Navbar";
import "./LinkTechno.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faHtml5, faNodeJs } from "@fortawesome/free-brands-svg-icons";

function LinkTechno() {
  return (
    <>
      <NavbarMenuBurger />
      <h1>Mes Technologies Utiliser</h1>
      <div className="LogoTechno">
        <div>
          <p>HTML</p>
          <img className="logo" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="" />
          <p>CSS</p>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="" />
        </div>

        <div>
          <p>React</p>
          <img className="logo" src="https://www.pngfind.com/pngs/m/638-6386507_10-years-of-experience-react-native-logo-svg.png" alt="" />
          <p>My SQL</p>
          <img className="logo" src="https://img2.freepng.fr/20180824/ktx/kisspng-mysql-workbench-computer-icons-logo-portable-netwo-thezedt-tech-tips-and-random-thoughts-5b80352110ca84.1955496015351288650688.jpg" alt="" />
        </div>

        <div>
          <p>JavaScript</p>
          <img className="logo" src="https://e7.pngegg.com/pngimages/640/199/png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png" alt="" />
          <p>Node JS</p>
          <img className="logo" src="https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png" alt="" />
        </div>
      </div>
      <div>

        <div className="Logo_Container">
          <FontAwesomeIcon icon={faCss3Alt} className='Css' />
          <FontAwesomeIcon icon={faHtml5} className='Html' />
          <FontAwesomeIcon icon={faReact} className='React' />
          <FontAwesomeIcon icon={faNodeJs} className='NodeJs' />
        </div>
      </div>

    </>
  );
}

export default LinkTechno;