import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  const products = props.dummyproducts;
  let totalAmount = 0;
  products.forEach((product) => {
    totalAmount += product.price;
  });
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row style={{ marginBottom: "15px" }}>
          <Col>
            Item <hr></hr>
          </Col>
          <Col>
            Price <hr></hr>
          </Col>
          <Col>
            Quantity <hr></hr>
          </Col>
        </Row>
        {props.dummyproducts.map((product) => (
          <Row style={{ marginBottom: "15px" }}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card style={{ width: "80px", display: "inline-block" }}>
                <Card.Img variant="top" src={product.imageUrl}></Card.Img>
              </Card>
              <p style={{ paddingLeft: "20px", display: "inline-block" }}>
                {product.title}
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              ${product.price}
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {product.quantity}
              <Button variant="danger">Remove</Button>
            </Col>
          </Row>
        ))}
        <h4
          style={{
            float: "right",
          }}
        >
          Total
          <span style={{ padding: "10px" }}>${totalAmount}</span>
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ margin: "auto" }} onClick={props.onHide}>
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
