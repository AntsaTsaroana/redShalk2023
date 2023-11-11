import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from '../components/Products';

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
                src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cartImg"
            />
            <Products products={products} show={9} />
        </div>
    );
};

export default AllProduits;