const addItem = (props) => {
  //create a copy of our cart state, avoid overwritting existing state
  let cartCopy = [...props.cart];

  //assuming we have an ID field in our item
  let { ID } = props.item;

  //look for item in cart array
  let existingItem = cartCopy.find((cartItem) => cartItem.ID === ID);

  //if item already exists
  if (existingItem) {
    existingItem.quantity += props.item.quantity; //update item
  } else {
    //if item doesn't exist, simply add it
    cartCopy.push(props.item);
  }

  //update app state
  props.setCart(cartCopy);

  //make cart a string and store in local space
  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart);
};

export default addItem;
