import React from "react";
import Repas from "./Repas";

const Categorie = ({ title, produits, callback }) => {
  return (
    <div className="Cat">
      <h3>{title}</h3>
      <div className="Repas">
        {produits.map((item, index) => {
          return <Repas data={item} key={item.id} callback={callback} />;
        })}
      </div>
    </div>
  );
};

export default Categorie;
