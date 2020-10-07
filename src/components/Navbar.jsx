import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarReactstrap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md" className="NavbarContent">
        <NavItem>
          <Link to="/" className="NavbarTitle">
            <section class="ds-header__logo test">
              <div class="ds-img ds-img--logo" role="img" aria-label="Bpifrance"></div>
            </section>
          </Link>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/Sites" className="NavbarLink">
                les Sites
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Cookies" className="NavbarLink">
                Les Cookies
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/AddSite" className="NavbarLink">
                Ajouter un Site
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/AddCookie" className="NavbarLink">
                Ajouter un Cookie
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarReactstrap;
