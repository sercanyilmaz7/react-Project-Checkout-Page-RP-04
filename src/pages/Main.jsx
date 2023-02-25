import React from "react";
import Buttons from "../components/Buttons";
import { useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const Main = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const BASE_URL = "https://63f0f69e5b7cf4107e2a3569.mockapi.io/api/commets";

  const getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setData(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (newProduct) => {
    try {
      await axios.post(BASE_URL, newProduct);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const handleMinus = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      await axios.put(`${BASE_URL}/${id}`, {
        amount: data.amount - 1,
      });
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const handlePlus = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      await axios.put(`${BASE_URL}/${id}`, {
        amount: +data.amount + 1,
      });
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main
      className={
        show
          ? "container d-flex  justify-content-center f-colunm w-75 "
          : "d-flex justify-content-center flex-column align-items-center "
      }
    >
      <div className={show ? "col-5" : "d-flex justify-content-center m-5"}>
        <Buttons show={show} setShow={setShow} />
        {show && <AddProduct postData={postData} />}
      </div>
      <div className={show ? "col-7" : "col-5 mb-5"}>
        <div>
          {data?.map((item) => {
            return (
              <ProductCard
                item={item}
                key={item.id}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
        <div>
          <CardTotal data={data} />
        </div>
      </div>
    </main>
  );
};

export default Main;
