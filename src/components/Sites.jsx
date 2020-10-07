import React from "react";
import NavbarMenuBurger from "./Navbar";
import axios from 'axios';
import "./Sites.css";

export default class Sites extends React.Component {
  state = {
    site_bpi: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/site_bpi`)
      .then(res => {
        const site_bpi = res.data;
        this.setState({ site_bpi });
      })
  }


  render() {
    return (

    <>
      <NavbarMenuBurger />

      <h1>Sites Bpifrance</h1>
      <br/>
      <br/>
      <table className="tableSites">
        <thead className="titleTable">
          <td>Nom du site</td>
          <td>Url du site</td>
          <td>Gestionnaire</td>
          <td>Contact du Gestionnaire</td>
        </thead>

      {/*
        <tr>
          <td>{site_bpi.site_name}</td>
          <td>{site_bpi.url_site}</td>
          <td>{site_bpi.GestionSite}</td>
          <td>{site_bpi.ContactGestionSite}</td>
        </tr>
      */}
        <tr className="LigneJ">
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>
         
        <tr>
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

        <tr className="LigneJ">
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

        <tr>
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

        <tr className="LigneJ">
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

        <tr>
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

        <tr className="LigneJ">
          <td>Bpifrance</td>
          <td>https://www.bpifrance.fr</td>
          <td>Julien NORHONA</td>
        </tr>

      </table>


    </>
  );
}
}
