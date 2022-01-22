import React from "react";
import Repas from "./Repas";

const Categorie = ({ title, produits }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="Repas">
        {produits.map((item, index) => {
          return <Repas data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Categorie;
