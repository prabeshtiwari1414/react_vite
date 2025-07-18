const deleteFromCart = (productData, setCardData) => {
  const cardData = JSON.parse(localStorage.getItem("cart"));
  const updatedData = cardData.filter((item) => item.id !== productData.id);
  setCardData(updatedData);
  localStorage.setItem("cart", JSON.stringify(updatedData));
};

export default deleteFromCart;
