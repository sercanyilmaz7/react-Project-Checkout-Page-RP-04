import { useState } from "react";
import React from "react";

const AddProduct = ({ postData }) => {
  const [newProduct, setNewProduct] = useState({
    amount: "",
    dampingRate: 0.8,
    image: "",
    name: "",
    price: "",
  });
//   console.log(newProduct)

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(newProduct)
    setNewProduct({
      amount: "",
      dampingRate: 0.8,
      image: "",
      name:"",
      price: "",
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={newProduct.amount}
            onChange={(e) =>
              setNewProduct({ ...newProduct, amount: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Your vanity URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
