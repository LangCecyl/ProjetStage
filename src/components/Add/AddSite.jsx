import React, { useState } from 'react';
import NavbarMenuBurger from "../Navbar";
import axios from 'axios';
import "./AddSite.css";

const AddSite = () => {

  const [namesite, setNameSite] = useState('');
  const [urlsite, setUrlSite] = useState('');
  const [gestionsite, setGestionSite] = useState('');
  const [contactgestionsite, setContactGestionSite] = useState('');

  const onChangeNameSite = (e) => {
    setNameSite(
      e.target.value,
    );
  };
  const onChangeUrlSite = (e) => {
    setUrlSite(
      e.target.value,
    );
  };
  const onChangeGestionSite = (e) => {
    setGestionSite(
      e.target.value,
    );
  };
  const onChangeContactGestionSite = (e) => {
    setContactGestionSite(
      e.target.value,
    );
  };


  function submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/site_bpi/add';

    axios
      .post(url, {
        namesite,
        urlsite,
        gestionsite,
        contactgestionsite,
      })
      .then((res) => res.data)
      .then((res) => {
        alert(`Le texte a bien été enregistré !`);
      })

      .catch((err) => {
        console.log(err);
      });
  }
    //   function submitForm(e) {
    //      e.preventDefault();
    //       const url = 'http://localhost:8000/site_bpi/add';
    // axios.post(url, {
    //    namesite,
    //     urlsite,
    //    gestionsite,
    //      contactgestionsite
    //    })
    //     .then((res) => res.data)
    //    .then((res) => {
    //      alert(`Le texte a bien été enregistré !`);
    //     axios.post('http://localhost:8000/site_bpi/', {
    //        namesite,
    //        urlsite,
    //        gestionsite,
    //      contactgestionsite
    //     })
    //      .then((res) => res.data)
    //     })

    //    .catch((err) => {
    //         console.log(err)
    //      })

 // }

  return (
    <>
      <NavbarMenuBurger />
      <h1>Ajouter un site</h1>
      <div>
        <form className="formSite" onSubmit={submitForm} >
          <div className="ds-input-group">
            <label htmlFor="namesite" className="ds-input-group__label" for="namesite">Nom du site :</label>
            <input
              className="ds-input-group__input"
              id="namesite"
              name="namesite"
              value={namesite}
              onChange={onChangeNameSite}
              required
            />
          </div>
          <div className="ds-input-group">
            <label htmlFor="urlsite" className="ds-input-group__label" for="urlsite">Url du site :</label>
            <input
              className="ds-input-group__input"
              id="urlsite"
              name="urlsite"
              value={urlsite}
              onChange={onChangeUrlSite}
              required

            />
          </div>
          <div className="ds-input-group">
            <label htmlFor="gestionsite" className="ds-input-group__label" for="gestionsite">Gestionnaire du site :</label>
            <input
              className="ds-input-group__input"
              id="gestionsite"
              name="gestionsite"
              value={gestionsite}
              onChange={onChangeGestionSite}
              required
            />
          </div>
          <div className="ds-input-group">
            <label htmlFor="contactgestionsite" className="ds-input-group__label" for="contactgestionsite">Contact gestion du site :</label>
            <input
              className="ds-input-group__input"
              id="contactgestionsite"
              name="contactgestionsite"
              value={contactgestionsite}
              onChange={onChangeContactGestionSite}
              required
            />
          </div>
          <button className="ds-btn ds-btn--primary" type="submit" >
            Submit
                  </button>
        </form>
      </div>
    </>
  );
}


export default AddSite;
