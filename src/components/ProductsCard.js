import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast, Flip } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="relative group">
      <div
        onClick={handleDetails}
        className="h-96 cursor-pointer overflow-hidden" style={{width:'266px'}}
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="border-[1px] px-2 py-4" style={{width:'266px'}}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="text-sm relative flex justify-end overflow-hidden">
            <div className="flex gap-2">
              {/* <p className="line-through text-gray-500">${product.oldPrice}</p> */}
              <p className="font-semibold">${product.price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p>{product.category}</p>
          <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} est ajouté`)
              }
              className="addText flex items-center gap-2 cursor-pointer" style={{fontSize:'11px'}}
            >
              ajouter au panier
              <span>
                <BsCart3 />
              </span>
            </p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        {product.isNew && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
            Nouveau
          </p>
        )}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductsCard;
