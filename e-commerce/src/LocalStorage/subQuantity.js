const subQuantity = (setCartData, productData) => {
  if (productData.quantity <= 1) return;

  console.log("i am in addQuantity", productData);
  const localdata = JSON.parse(localStorage.getItem("cart"));
  const index = localdata.findIndex((item) => item.id == productData.id);
  localdata[index].quantity -= 1;
  setCartData(localdata);
  localStorage.setItem("cart", JSON.stringify(localdata));
};
export default subQuantity;
