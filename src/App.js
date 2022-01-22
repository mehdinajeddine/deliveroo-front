import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import logo from "./logo.svg";
import Restaurant from "./components/Restaurant";
import Panier from "./components/Panier";
import { set, get } from "idb-keyval";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getRestaurantData = async () => {
      const data = await axios.get("https://myspeedyfood.herokuapp.com");
      setData(data.data);
      setIsLoading(false);
    };

    getRestaurantData();
    getDataLocally();
  }, []);

  const saveDataLocally = async (data) => {
    await set("cart", data)
      .then(() => console.log("Cart saved locally"))
      .catch((err) => console.log("Impossible to save locally", err));
  };

  const getDataLocally = async () => {
    const data = [];
    try {
      data = await get("cart");
      console.log("data get locally : ", data);
    } catch (error) {
      console.log("no data in cache : " + error.message);
    }
    setPanier(data);
  };

  const updateCart = (data) => {
    setPanier(data);
    saveDataLocally(data);
  };

  const addItemToCart = (newItem) => {
    let flag = false;
    newItem.value = 1;
    let newTab = panier.map((item) => {
      if (item.id === newItem.id) {
        flag = true;
        item.value++;
      }
      return item;
    });
    if (!flag) {
      newTab = [...panier, newItem];
    }
    setPanier(newTab);
    saveDataLocally(newTab);
  };

  return (
    <div className="App">
      <header className="container">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <hr />
      <main>
        <Panier data={panier} callback={updateCart} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Restaurant
            restaurant={data.restaurant}
            categories={data.categories}
            callback={addItemToCart}
          />
        )}
      </main>
    </div>
  );
}

export default App;
