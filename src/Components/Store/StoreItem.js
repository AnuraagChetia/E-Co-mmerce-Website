import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom";
const StoreItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      title: props.item.title,
      imageUrl: props.item.imageUrl,
      price: props.item.price,
      amount: props.item.amount,
    });
  };
  return (
    <Col>
      <Card className="mx-auto" style={{ width: "18rem", margin: "20px" }}>
        <Link to={`/store/${props.item.title}`}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              {props.item.title}
            </Card.Title>
            <Card.Img variant="top" src={props.item.imageUrl} />
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
        </Link>
      </Card>
    </Col>
  );
};
export default StoreItem;
