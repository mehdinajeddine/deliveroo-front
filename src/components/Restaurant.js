import React from "react";
import Categorie from "./Categorie";

const Restaurant = ({ restaurant, categories }) => {
  return (
    <div>
      <section className="intro">
        <div>
          <h1>{restaurant.name}</h1>
          <h2>{restaurant.description}</h2>
        </div>
        <div>
          <img src={restaurant.picture} alt="" />
        </div>
      </section>
      <section className="produits">
        <div className="container">
          {categories.map((item, index) => {
            return (
              <Categorie key={index} title={item.name} produits={item.meals} />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
