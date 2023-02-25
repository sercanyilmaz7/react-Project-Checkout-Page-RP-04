import React from "react";
import { BsShieldFillPlus } from "react-icons/bs";
import { BsShieldFillMinus } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";

const ProductCard = ({ item, handleMinus, handlePlus, handleDelete }) => {
  console.log(item);
  const { id, image, name, price, dampingRate, amount } = item;
  return (
    <div className="cards shadow mb-2 mx-2">
      <div className="row g-0">
        <div className="col-5">
          <img src={image} alt="" className="w-100 h-100 rounded-start" />
        </div>
        <div className="col-7 d-flex flex-column my-4">
          <div className="card">
            <h5>{name}</h5>
            <div>
              <p className="text-warning display-6">
                $ <span>{(price * dampingRate).toFixed(2)}</span>
                <span className="text-dark h4 text-decoration-line-through">
                  {Number(price).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center border border-1 mb-2 mx-2">
              <div className="p-2">
                <BsShieldFillMinus
                  className="minus-button cursor-pointer h4"
                  onClick={() => {
                    amount !== 1 && handleMinus(id);
                  }}
                />
                <p className="d-inline mx-4 h4">{amount}</p>
                <BsShieldFillPlus
                  className="plus-button cursor-pointer h4"
                  onClick={() => handlePlus(id)}
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => handleDelete(id)}
            className="remove-button bg-danger my-2 text-center text-white py-1 cursor-pointer"
          >
            <FaTrashRestore />
            <span> Remove</span>
          </div>
          <div className="product-total">
            <p className="h3" >
              Product Total : ${" "}
              <span>{(price * dampingRate * +amount).toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
