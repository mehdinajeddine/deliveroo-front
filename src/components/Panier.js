import { Button } from "@mui/material";
import React from "react";

const Panier = ({ data, callback }) => {
  return (
    <div className="Panier">
      <div>
        <Button>Valider mon panier</Button>
        {data.map((item, index) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Panier;
