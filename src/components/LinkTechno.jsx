import React from "react";
import NavbarMenuBurger from "./Navbar";
import "./LinkTechno.css";

function LinkTechno() {
  return (
    <>
      <NavbarMenuBurger />
      <h1>Hello from Technologie</h1>
      <div className="LogoTechno">
        <div>
        <p>HTML</p>
        <img className="logo" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt=""/>
        <p>CSS</p>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt=""/>
      </div>

      <div>
        <p>React</p>
        <img className="logo" src="https://www.pngfind.com/pngs/m/638-6386507_10-years-of-experience-react-native-logo-svg.png" alt=""/>
        <p>My SQL</p>
        <img className="logo" src="https://img2.freepng.fr/20180824/ktx/kisspng-mysql-workbench-computer-icons-logo-portable-netwo-thezedt-tech-tips-and-random-thoughts-5b80352110ca84.1955496015351288650688.jpg" alt=""/>
      </div>
      
      <div>
        <p>JavaScript</p>
        <img className="logo" src="https://banner2.cleanpng.com/20180429/www/kisspng-javascript-logo-html-comment-blog-5ae63c22d40699.0773573515250381148685.jpg" alt=""/>
        <p>Node JS</p>
        <img className="logo" src="https://icon2.cleanpng.com/20180425/xeq/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84de7b809.1939946215246930699491.jpg" alt=""/>
      </div>
      </div>
      

    </>
  );
}

export default LinkTechno;