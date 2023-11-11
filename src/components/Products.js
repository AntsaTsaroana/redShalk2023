import React from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import '../assets/scss/products.scss';

const Products = ({ products, show }) => {
  return (
    <div className="py-10" >
      <div className="flex flex-col items-center gap-4">
        <span class="heading">
          <h1>PRODUITS</h1>
          <h2>PRODUITS</h2>
        </span>
        <span className="w-20 h-[3px] bg-black relative" style={{ position: 'relative', top: '-50px' }}></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="product-container p-25-50 max-w-screen-xl mx-auto grid grid-cols-4 gap-10">
        {products.slice(0, show).map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
      <Link to='/productAll'><button className="button">Voir plus</button></Link>
    </div>
  );
};

export default Products;
