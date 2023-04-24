import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartContextProvider = (props) => {
  // const cartCtx = useContext(CartContext);
  // const [items, setItems] = useState([]);

  // const [totalItemsInCart, setTotalItemsInCart] = useState(length);
  // const addItem = (item) => {
  //   setItems((prevItems) => {
  //     return [...prevItems, item];
  //   });
  //   length++;
  //   setTotalItemsInCart(length);
  // };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    quantity: cartState.items.length,
    // removeItem: removeItemToCartHandler,
  };
  return (
    // <CartContext.Provider value={{ items, addItem, totalItemsInCart }}>
    //   {props.children}
    // </CartContext.Provider>
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
