import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/dashboardAdmin.scss';

const AllCommande = () => {
    return (
        <div className='dashAdmin'>
            <div className='listBien'>
                <h2>Liste des Commandes</h2>
                <div class="table-bien">
                    <ul style={{ textAlign: 'left', margin: '0 auto', width: 'max-content' }}>
                        <li><b>Nom :</b> ... </li>
                        <li><b>Prénom :</b> ... </li>
                        <li><b>Longueur épaule :</b> ... </li>
                        <li><b>Tour de poitrine :</b> ... </li>
                        <li><b>Tour de taille :</b> ... </li>
                        <li><b>Tour de hanche :</b> ... </li>
                        <li><b>Longueur de bras :</b> ... </li>
                        <li><b>Tours de bras :</b> ... </li>
                        <li><b>Tour de cou :</b> ... </li>
                        <li><b>Longueur jupe :</b> ... </li>
                        <li><b>Email :</b> ... </li>
                        <li><b>Nuimero téléphone :</b> ... </li>
                        <button className='btn'>Facture</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllCommande;