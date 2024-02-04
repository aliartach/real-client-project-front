import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {  //It wraps its children with the context provider and manages the state related to the shopping cart.
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])


//***********//Add to cart
const addToCart = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
  console.log("is item", isItemInCart);
  if (isItemInCart) {
     setCartItems(
       cartItems.map((cartItem) =>
         cartItem._id === item._id
           ? { ...cartItem, quantity: cartItem.quantity + 1 }
           : cartItem
       )
     );
  } else {
     setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
 };
 
//**************//remove from cart
const removeFromCart = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
 
  if (isItemInCart.quantity === 1) {
     setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
  } else {
     setCartItems(
       cartItems.map((cartItem) =>
         cartItem._id === item._id
           ? { ...cartItem, quantity: cartItem.quantity - 1 }
           : cartItem
       )
     );
  }
 };
//*************//clear item
  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };
//************//get the total price of the items
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); //The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  };

  useEffect(() => {  //setItem function is provided by the localStorage object in the browser, and it is used here to store the shopping cart items in the local storage under the key "cartItems".
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //JSON.stringify is used to convert the array into a JSON string.
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems)); //JSON.parse: Converts a JSON string back into a JavaScript object or array.
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};