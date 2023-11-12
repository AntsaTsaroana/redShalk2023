import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Products from '../components/Products';
import halfBanner from '../assets/img/coupe.webp'

const AllProduits = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        setProducts(data.data);
    }, [data]);
    return (
        <div>
            <img
                className="w-full h-60 object-cover"
                src={halfBanner}
                alt="cartImg"
            />
            <Products products={products} show={9} />
        </div>
    );
};

export default AllProduits;