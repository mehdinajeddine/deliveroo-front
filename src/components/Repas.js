import React from "react";

const Repas = ({ data, callback }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("---> ", event.target);
    const newData = [...data];
    newData.push({ name: "titi" });
    callback(newData);
  };

  return (
    <div className="produit" onClick={handleClick}>
      <div className="produit-info">
        <h4>{data.title}</h4>
        <p className="desc">{data.description.slice(0, 120)}</p>
        <div className="align-h">
          <p className="price">{data.price} €</p>
          <p className="popular">{data.popular && <span>Pouplaire</span>}</p>
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
