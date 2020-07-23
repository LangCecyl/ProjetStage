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
            Cécyl LANG
          </Link>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/linkCV" className="NavbarLink">
                CV
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/linkContact" className="NavbarLink">
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/linkTechno" className="NavbarLink">
                Techno
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/linkProjets" className="NavbarLink">
                Projets
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarReactstrap;
