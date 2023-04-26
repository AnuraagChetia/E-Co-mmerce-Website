import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import axios from "axios";
const StoreItem = (props) => {
  const cartCtx = useContext(CartContext);
  const authctx = useContext(AuthContext);
  let email = localStorage.getItem("email");
  let updatedEmail;
  if (email) {
    updatedEmail = email.replace("@", "").replace(".", "");
  }
  const addToCartHandler = () => {
    // const item = {
    //   title: props.item.title,
    //   imageUrl: props.item.imageUrl,
    //   price: props.item.price,
    //   amount: props.item.amount,
    // };

    const items = props.item;
    // console.log(JSON.stringify({ ...items, quantity: 1 }));
    cartCtx.addItem({ ...items, quantity: 1 }, updatedEmail);
  };
  return (
    <Col>
      <Card className="mx-auto" style={{ width: "18rem", margin: "20px" }}>
        <Card.Body>
          <Link to={`/store/${props.item.title}`}>
            <Card.Title style={{ textAlign: "center" }}>
              {props.item.title}
            </Card.Title>
            <Card.Img variant="top" src={props.item.imageUrl} />
          </Link>
          <hr></hr>

          <Row>
            <Col>
              <Card.Text>${props.item.price}</Card.Text>
            </Col>

            <Col>
              <Button variant="primary" size="sm" onClick={addToCartHandler}>
                Add to Card
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default StoreItem;
