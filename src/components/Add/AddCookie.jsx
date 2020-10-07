import React, { useState } from 'react';
import NavbarMenuBurger from "../Navbar";
import axios from 'axios';
import "./AddSite.css";
import "../../bpiStyle.css";

function AddCookie() {

  const [nameCookie, setNameCookie] = useState('');
  const [valueCookie, setValueCookie] = useState('');
  const [domainCookie, setDomainCookie] = useState('');
  const [expiresCookie, setExpiresCookie] = useState('');
  const [sizeCookie, setSizeCookie] = useState('');
  const [secureCookie, setSecureCookie] = useState('');
  const [httpOnlyCookie, setHttpOnlyCookie] = useState('');
  const [sameiteCookie, setSameiteCookie] = useState('');
  const [priorityCookie, setPriorityCookie] = useState('');

  const onChangeNameCookie = (e) => {
    setNameCookie(
      e.target.value,
    );
  };
  const onChangeValueCookie = (e) => {
    setValueCookie(
      e.target.value,
    );
  };
  const onChangeDomainCookie = (e) => {
    setDomainCookie(
      e.target.value,
    );
  };
  const onChangeExpiresCookie = (e) => {
    setExpiresCookie(
      e.target.value,
    );
  };
  const onChangeSizeCookie = (e) => {
    setSizeCookie(
      e.target.value,
    );
  };
  const onChangeSecureCookie = (e) => {
    setSecureCookie(
      e.target.value,
    );
  };
  const onChangeHttpOnlyCookie = (e) => {
    setHttpOnlyCookie(
      e.target.value,
    );
  };
  const onChangeSameiteCookie = (e) => {
    setSameiteCookie(
      e.target.value,
    );
  };
  const onChangePriorityCookie = (e) => {
    setPriorityCookie(
      e.target.value,
    );
  };

  function submitForm(e) {
    e.preventDefault();
      const url = 'http://localhost:8000/cookie_bpi/add';

        axios.post(url, {
          nameCookie,
          valueCookie,
          domainCookie,
          expiresCookie,
          sizeCookie,
          secureCookie,
          httpOnlyCookie,
          sameiteCookie,
          priorityCookie
        })
          .then((res) => res.data)
          .then((res) => {
            alert(`Le texte a bien été enregistré !`);
            axios.post('http://localhost:8000/cookie_bpi', {
              nameCookie,
              valueCookie,
              domainCookie,
              expiresCookie,
              sizeCookie,
              secureCookie,
              httpOnlyCookie,
              sameiteCookie,
              priorityCookie
            })
              .then((res) => res.data)
            })

          .catch(() => {
            alert(`Erreur lors de l'ajout des données`);
          });
        }


  return (

    <> 

      <NavbarMenuBurger />
      <h1>Ajouter un cookie</h1>
      <div>
        <form className="formSite"  onSubmit={submitForm}>
          <div className="ds-input-group">
            <label className="ds-input-group__label" for="nameCookie">Nom du cookie : </label>
            <input 
            className="ds-input-group__input"
            id="nameCookie"
            name="nameCookie"
            value={nameCookie}
            onChange={onChangeNameCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="valueCookie">Valeur du cookie : </label>
            <input 
            className="ds-input-group__input"
            id="valueCookie"
            name="valueCookie"
            value={valueCookie}
            onChange={onChangeValueCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="domainCookie">Domain du cookie : </label>
            <input 
            className="ds-input-group__input"
            id="domainCookie"
            name="domainCookie"
            value={domainCookie}
            onChange={onChangeDomainCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="expiresCookie">Max-age du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="expiresCookie"
            name="expiresCookie"
            value={expiresCookie}
            onChange={onChangeExpiresCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="sizeCookie">Size du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="sizeCookie"
            name="sizeCookie"
            value={sizeCookie}
            onChange={onChangeSizeCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="secureCookie">Secure du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="secureCookie"
            name="secureCookie"
            value={secureCookie}
            onChange={onChangeSecureCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="httpOnlyCookie">Http Only du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="httpOnlyCookie"
            name="httpOnlyCookie"
            value={httpOnlyCookie}
            onChange={onChangeHttpOnlyCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="sameiteCookie">Sameite du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="sameiteCookie"
            name="sameiteCookie"
            value={sameiteCookie}
            onChange={onChangeSameiteCookie}
            required
            />
          </div>

          <div className="ds-input-group">
            <label className="ds-input-group__label" for="priorityCookie">Priority du cookie :</label>
            <input 
            className="ds-input-group__input"
            id="priorityCookie"
            name="priorityCookie"
            value={priorityCookie}
            onChange={onChangePriorityCookie}
            required
            />
          </div>

          <button class="ds-btn ds-btn--primary" type="submit" >
            Submit
          </button>

        </form>
      </div>
    </>
  );
}

export default AddCookie;