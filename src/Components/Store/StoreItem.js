import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CartContext from "../../Store/cart-context";
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
    <div className="col">
      <Card className="mx-auto" style={{ width: "18rem" }}>
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
      </Card>
    </div>
  );
};
export default StoreItem;
