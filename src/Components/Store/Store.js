import React from "react";
import Button from "react-bootstrap/Button";
import StoreItem from "./StoreItem";
const Store = (props) => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
        Music
      </h2>
      <div className="container">
        <div className="row row-cols-2 gy-5">
          {props.products.map((product) => (
            <StoreItem item={product}></StoreItem>
          ))}
        </div>
      </div>
      <div className="text-center" style={{ padding: "30px" }}>
        <Button
          variant="info"
          style={{ color: "white", fontWeight: "bold" }}
          onClick={props.onCartClick}
        >
          See the cart
        </Button>
      </div>
    </>
  );
};
export default Store;
