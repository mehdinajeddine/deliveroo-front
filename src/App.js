import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import logo from "./logo.svg";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getRestaurantData = async () => {
      const data = await axios.get("https://myspeedyfood.herokuapp.com");
      setData(data.data);
      setIsLoading(false);
    };

    getRestaurantData();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <hr />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Restaurant
            restaurant={data.restaurant}
            categories={data.categories}
          />
        )}
      </main>
    </div>
  );
}

export default App;
