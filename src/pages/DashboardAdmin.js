import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/dashboardAdmin.scss';
import axios from 'axios';

const DashboardAdmin = () => {
  const [isAdd, setIsAdd] = useState(true);
  const [isList, setIsList] = useState(false);

  const pageAdd = () => {
    setIsAdd(true);
    setIsList(false);
  };
  const pageList = () => {
    setIsList(true);
    setIsAdd(false);
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');

  const saveProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('categories', categories);
    formData.append('price', price);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/products/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="dashAdmin">
      <div className="btnGroup">
        <button onClick={() => pageAdd()}>Ajout</button>
        <button onClick={() => pageList()}>Liste</button>
      </div>
      {isAdd && (
        <div className="ajoutBien">
          <h2>Ajouter nouveau Produits</h2>
          <form encType="multipart/form-data" onSubmit={saveProducts}>
            <select
              id="cars"
              name={categories}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            >
              <option>Catégorie</option>
              <option value={`Ensemble`}>Ensemble</option>
              <option value={`Jupe`}>Jupe</option>
              <option value={`Chemise`}>Chemise</option>
              <option value={`Robe`}>Robe</option>
              <option value={`Haut`}>Haut</option>
            </select>
            <input
              type="text"
              name={title}
              placeholder="Nom du produit"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              name={price}
              placeholder="Prix"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="text"
              name={description}
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="file"
              accept=".gif,.jpg,.jpeg,.png"
              name={image}
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <input type="submit" value="Ajouter" />
          </form>
        </div>
      )}

      {isList && (
        <div className="listBien">
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
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>
                    <Link to="/bien-modif" className="update">
                      Modifier
                    </Link>
                    <Link to="#" className="delete">
                      Supprimer
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;
