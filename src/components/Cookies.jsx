import React, { useState } from 'react';
import axios from 'axios'
import NavbarMenuBurger from "./Navbar";
import "./Cookies.css";

export default class Cookies extends React.Component {
  state = {
    cookie_bpi: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/cookie_bpi`)
      .then(res => {
        const cookie_bpi = res.data;
        this.setState({ cookie_bpi });
      })
  }


  render() {
    return (
      <>
        <NavbarMenuBurger />

        <h1>Cookies</h1>
        <br />
        <br />

        <table className="tableCookies" >
          <thead className="titleTable">
            <td>Nom </td>
            <td>Valeur </td>
            <td>Domain</td> 
            <td>Max-age </td>
            <td>Size </td>
            <td>Secure</td>
            <td>Http Only</td>
            <td>Sameite</td>
            <td>Priority</td>
          </thead>

          <tbody>
            {/*
            
            <tr>
              <td>{cookie_bpi.name_cookie}</td>
              <td>{cookie_bpi.value_cookie}</td>
              <td>{cookie_bpi.domain_cookie}</td>
              <td>{cookie_bpi.expires_cookie}</td>
              <td>{cookie_bpi.size_cookie}</td>
              <td>{cookie_bpi.secure_cookie}</td>
              <td>{cookie_bpi.httpOnlyCookie}</td>
              <td>{cookie_bpi.priority_cookie}</td>
            </tr>
            
            */}

            <tr className="LigneJ">
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
            </tr>

            <tr>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
            </tr>
            <tr className="LigneJ">
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
            </tr>

            <tr>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
            </tr>

            <tr className="LigneJ">
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
              <td>??????</td>
            </tr>

          </tbody>
        </table>


      </>
    );
  }
}


