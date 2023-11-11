import React from 'react';
import '../assets/scss/dashboardAdmin.scss';

const ModifProduit = () => {
    return (
        <div className='dashAdmin'> 
            <div className='ajoutBien'>
                    <h2>Modification Produit</h2>
                    <form>
                        <select id="cars" name="typeBien">
                            <option>Catégorie</option>
                            <option value="appartement">Ensemble</option>
                            <option value="maison">Jupe</option>
                            <option value="maison">Chemise</option>
                            <option value="maison">Robe</option>
                            <option value="maison">Haut</option>
                        </select>
                        <input type="text" name="rent" placeholder='Nom du produit' />
                        <input type="text" name="surface" placeholder='Prix' />
                        <input type="text" name="address" placeholder='Description' />
                        <input type="file" accept=".gif,.jpg,.jpeg,.png" />
                        <input type="submit" value="Ajouter" />
                    </form>
                </div>
        </div>
    );
};

export default ModifProduit;