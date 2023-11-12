import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/dashboardAdmin.scss';

const AllCommande = () => {
    return (
        <div className='dashAdmin'>
            <div className='listBien'>
                <h2>Liste des Commandes</h2>
                <div class="table-bien">
                    <ul style={{ textAlign: 'left', margin: '15px auto', width: 'max-content' }}>
                        <li><b>Nom :</b> RAHAJARIZAFY </li>
                        <li><b>Prénom :</b> Andoniaina </li>
                        <li><b>Longueur épaule :</b> 25 cm </li>
                        <li><b>Tour de poitrine :</b> 32 cm </li>
                        <li><b>Tour de taille :</b> 31 cm </li>
                        <li><b>Tour de hanche :</b> 41 cm </li>
                        <li><b>Longueur de bras :</b> 30 cm </li>
                        <li><b>Tours de bras :</b> 20 cm </li>
                        <li><b>Tour de cou :</b> 21 cm </li>
                        <li><b>Longueur jupe :</b> 33 cm </li>
                        <li><b>Email :</b> amdo@gmail.com </li>
                        <li><b>Numero téléphone :</b> 033 23 546 78 </li>
                        <a href="../assets/facture.pdf" download><button className='btn'>Facture</button></a>
                    </ul>
                    <ul style={{ textAlign: 'left', margin: '15px auto', width: 'max-content' }}>
                        <li><b>Nom :</b> RAHAJARIZAFY </li>
                        <li><b>Prénom :</b> Andoniaina </li>
                        <li><b>Longueur épaule :</b> 25 cm </li>
                        <li><b>Tour de poitrine :</b> 32 cm </li>
                        <li><b>Tour de taille :</b> 31 cm </li>
                        <li><b>Tour de hanche :</b> 41 cm </li>
                        <li><b>Longueur de bras :</b> 30 cm </li>
                        <li><b>Tours de bras :</b> 20 cm </li>
                        <li><b>Tour de cou :</b> 21 cm </li>
                        <li><b>Longueur jupe :</b> 33 cm </li>
                        <li><b>Email :</b> amdo@gmail.com </li>
                        <li><b>Numero téléphone :</b> 033 23 546 78 </li>
                        <a href="../assets/facture.pdf" download><button className='btn'>Facture</button></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllCommande;