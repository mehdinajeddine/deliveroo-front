import React from "react";
import Categorie from "./Categorie";

const Restaurant = ({ restaurant, categories, callback }) => {
  return (
    <div>
      <section className="intro container">
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
            return item.meals.length > 0 ? (
              <Categorie
                key={index}
                title={item.name}
                produits={item.meals}
                callback={callback}
              />
            ) : (
              <div key={index}></div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
