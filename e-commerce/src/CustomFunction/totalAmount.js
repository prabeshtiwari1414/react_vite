const totalAmount = (cartData) => {
  let total = 0;
  cartData.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

export default totalAmount;
