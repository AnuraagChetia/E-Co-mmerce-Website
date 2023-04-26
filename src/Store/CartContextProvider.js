import React, { useEffect, useReducer } from "react";
import CartContext from "./cart-context";

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

const crudUrl = "https://crudcrud.com/api/9417c3c485ad42b18354fdbc08d67d59";

let email = localStorage.getItem("email");
let updatedEmail;
if (email) {
  updatedEmail = email.replace(/[^a-zA-Z ]/g, "");
}
console.log(updatedEmail);

const addToCrudHandler = async (item) => {
  try {
    fetch(`${crudUrl}/${updatedEmail}`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
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
    const newCart = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    // console.log(newCart);
    addToCrudHandler(newCart);
    return newCart;
  }
  return defaultCartState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // console.log(item);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const initialFetch = async () => {
    const response = await fetch(`${crudUrl}/${updatedEmail}`);

    const data = await response.json();
    // console.log("this");
    // console.log(data);
    if (data.length > 0) {
      data[data.length - 1].items.forEach((element) => {
        addItemToCartHandler({
          ...element,
          totalAmount: data[data.length - 1].totalAmount,
        });
      });
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    quantity: cartState.items.length,
    // removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
