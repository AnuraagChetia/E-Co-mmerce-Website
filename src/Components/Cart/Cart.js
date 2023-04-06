import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
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
        {cartCtx.items.map((product) => (
          <CartItem item={product}></CartItem>
        ))}
        <hr></hr>
        <h4
          style={{
            float: "right",
          }}
        >
          Total
          <span style={{ padding: "10px" }}>${cartCtx.totalAmount}</span>
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
