import React from 'react';
import '../assets/scss/commande.scss'

const Commande = () => {
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
            <section className="plusInfo" style={{marginBottom: '150px'}}>
                <form className="inputContainer animateFromBottom" id="monFormulaire">
                    <div className="input1">
                    <input required type="text" className="input" id="entreprise" />
                        <label className="input-label">Nom</label>
                    </div>
                    <div className="input2">
                        <input required type="text" className="input" id="entreprise" />
                        <label className="input-label">Prénom</label>
                    </div>
                    <div className="input3">
                        <input required type="number" className="input" id="domaine" />
                        <label className="input-label">Longueur épaule</label>
                    </div>
                    <div className="input4">
                        <input required type="number" className="input" id="email" />
                        <label className="input-label">Tour de poitrine</label>
                    </div>
                    <div className="input5">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">Tour de taille</label>
                    </div>
                    <div className="input6">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">Tour de hanche</label>
                    </div>
                    <div className="input7">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">longueur de bras</label>
                    </div>
                    <div className="input8">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">Tours de bras</label>
                    </div>
                    <div className="input9">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">Tour de cou</label>
                    </div>
                    <div className="input10">
                        <input required type="number" className="input" id="telephone" />
                        <label className="input-label">Longueur jupe</label>
                    </div>
                    <div className="input12">
                    <input required type="mail" className="input" id="email" />
                        <label className="input-label">Votre mail</label>
                    </div>
                    <div className="input13">
                        <input required type="number" className="input" id="telephone" />
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