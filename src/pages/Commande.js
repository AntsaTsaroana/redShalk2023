import React, { useState } from 'react';
import '../assets/scss/commande.scss';
import axios from 'axios';

const Commande = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [longueurEpaule, setLongueurEpaule] = useState('');
  const [tourPoitrine, setTourPoitrine] = useState('');
  const [tourTaille, setTourTaille] = useState('');
  const [tourHanche, setTourHanche] = useState('');
  const [longueurBras, setLongueurBras] = useState('');
  const [tourBras, setTourBras] = useState('');
  const [tourCoue, setTourCoue] = useState('');
  const [longueurJupe, setLongueurJupe] = useState('');
  const [longueurHanche, setLongueurHanche] = useState('');

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: `http://localhost:5000/api/commandes/`,
        data: {
          email: email,
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          longueurEpaule: longueurEpaule,
          tourPoitrine: tourPoitrine,
          tourTaille: tourTaille,
          longueurHanche: longueurHanche,
          longueurBras: longueurBras,
          tourBras: tourBras,
          tourCoue: tourCoue,
          longueurJupe: longueurJupe,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <span className="heading">
        <h1>Commande</h1>
        <h2>Commande</h2>
      </span>
      <section className="plusInfo" style={{ marginBottom: '150px' }}>
        <form
          className="inputContainer animateFromBottom"
          id="monFormulaire"
          onSubmit={registerSubmit}
        >
          <div className="input1">
            <input
              required
              type="text"
              className="input"
              id="entreprise"
              onChange={(event) => {
                setNom(event.target.value);
              }}
              value={nom}
            />
            <label className="input-label">Nom</label>
          </div>
          <div className="input2">
            <input
              required
              type="text"
              className="input"
              id="entreprise"
              onChange={(event) => {
                setPrenom(event.target.value);
              }}
              value={prenom}
            />
            <label className="input-label">Prénom</label>
          </div>
          <div className="input3">
            <input
              required
              type="number"
              className="input"
              id="domaine"
              onChange={(event) => {
                setLongueurEpaule(event.target.value);
              }}
              value={longueurEpaule}
            />
            <label className="input-label">Longueur épaule</label>
          </div>
          <div className="input4">
            <input
              required
              type="number"
              className="input"
              id="email"
              onChange={(event) => {
                setTourPoitrine(event.target.value);
              }}
              value={tourPoitrine}
            />
            <label className="input-label">Tour de poitrine</label>
          </div>
          <div className="input5">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setTourTaille(event.target.value);
              }}
              value={tourTaille}
            />
            <label className="input-label">Tour de taille</label>
          </div>
          <div className="input6">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setTourHanche(event.target.value);
              }}
              value={tourHanche}
            />
            <label className="input-label">Tour de hanche</label>
          </div>
          <div className="input7">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setLongueurBras(event.target.value);
              }}
              value={longueurBras}
            />
            <label className="input-label">longueur de bras</label>
          </div>
          <div className="input8">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setTourBras(event.target.value);
              }}
              value={tourBras}
            />
            <label className="input-label">Tours de bras</label>
          </div>
          <div className="input9">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setTourCoue(event.target.value);
              }}
              value={tourCoue}
            />
            <label className="input-label">Tour de cou</label>
          </div>
          <div className="input10">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setLongueurJupe(event.target.value);
              }}
              value={longueurJupe}
            />
            <label className="input-label">Longueur jupe</label>
          </div>
          <div className="input12">
            <input
              required
              type="mail"
              className="input"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
            <label className="input-label">Votre mail</label>
          </div>
          <div className="input13">
            <input
              required
              type="number"
              className="input"
              id="telephone"
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
              value={telephone}
            />
            <label className="input-label">Votre numero de téléphone</label>
          </div>
          <div className="input14">
            <input
              type="submit"
              className="input submit"
              value="Passer votre commande"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Commande;
