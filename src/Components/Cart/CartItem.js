import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const CartItem = (props) => {
  return (
    <Row style={{ marginBottom: "15px" }}>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "80px", display: "inline-block" }}>
          <Card.Img variant="top" src={props.item.imageUrl}></Card.Img>
        </Card>
        <p style={{ paddingLeft: "20px", display: "inline-block" }}>
          {props.item.title}
        </p>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        ${props.item.price}
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {props.item.amount}
        <Button variant="danger">Remove</Button>
      </Col>
    </Row>
  );
};
export default CartItem;
