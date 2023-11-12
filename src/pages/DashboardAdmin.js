import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/dashboardAdmin.scss';

const DashboardAdmin = () => {
    const [isAdd, setIsAdd] = useState(true);
    const [isList, setIsList] = useState(false);

    const pageAdd = () => {
        setIsAdd(true);
        setIsList(false);
    }
    const pageList = () => {
        setIsList(true);
        setIsAdd(false);
    }
    return (
        <div className='dashAdmin'>
            <div className='btnGroup'>
                <button onClick={() => pageAdd()}>Ajout</button>
                <button onClick={() => pageList()}>Liste</button>
            </div>
            {isAdd &&
                <div className='ajoutBien'>
                    <h2>Ajouter nouveau Produits</h2>
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
            }

            {isList &&
                <div className='listBien'>
                    <h2>Liste des Produits</h2>
                    <div class="table-bien">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Déscription</th>
                                    <th>Catégorie</th>
                                    <th>Prix</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Andriantsoa</td>
                                    <td>Ensemble Gris</td>
                                    <td>Ensemble</td>
                                    <td>150.000 ar</td>
                                    <td>Disponible</td>
                                    <td>
                                        <Link to="/modification" className='update'>Modifier</Link>
                                        <Link to="#" className='delete'>Supprimer</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </div>
    );
};

export default DashboardAdmin;