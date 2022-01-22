import { Button } from "@mui/material";
import React from "react";
import { Input, Paper } from "@mui/material";

const Panier = ({ data, callback }) => {
  const handClickLess = (e) => {
    e.preventDefault();

    let newTab = data.filter((item) => {
      if (item.id === e.target.dataset.id) {
        if (item.value > 1) {
          item.value--;
        } else {
          return false;
        }
      }
      return item;
    });
    callback(newTab);
  };

  const handClickAdd = (e) => {
    e.preventDefault();

    let newTab = data.filter((item) => {
      if (item.id === e.target.dataset.id) {
        item.value++;
      }
      return item;
    });
    callback(newTab);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let newTab = data.filter((item) => {
      if (item.id === e.target.name) {
        item.value = e.target.value;
      }
      if (e.target.value != 0) {
        return item;
      }
    });
    callback(newTab);
    // console.log("new Value : ", e.target.value);
  };

  return (
    <div className="Panier">
      <Paper elevation={3}>
        <Button>Valider mon panier</Button>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div key={index} className="align-h">
                <div className="align-h">
                  <Button data-id={item.id} onClick={handClickLess}>
                    -
                  </Button>
                  <Input
                    name={item.id}
                    size="small"
                    value={item.value}
                    onChange={handleChange}
                  />
                  <Button data-id={item.id} onClick={handClickAdd}>
                    +
                  </Button>
                </div>
                <div>{item.name}</div>
              </div>
            );
          })
        ) : (
          <div>Votre panier est vide</div>
        )}
      </Paper>
    </div>
  );
};

export default Panier;
