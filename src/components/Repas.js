import React from "react";

const Repas = ({ data }) => {
  return (
    <div className="produit">
      <div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <div>
          <p>{data.price}</p>
          <p>{data.popular && <span>Pouplaire</span>}</p>
        </div>
      </div>
      <div>
        {data.picture && (
          <img className="thumbnail" src={data.picture} alt={data.title} />
        )}
      </div>
    </div>
  );
};

export default Repas;
