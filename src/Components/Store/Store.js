import React from "react";
import Button from "react-bootstrap/Button";
import StoreItem from "./StoreItem";
import { Container, Row } from "react-bootstrap";
const Store = (props) => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
        Music
      </h2>
      <Container>
        <Row xs={1} md={2} >
          {props.products.map((product) => (
            <StoreItem item={product} key={Math.random()}></StoreItem>
          ))}
        </Row>
      </Container>
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
