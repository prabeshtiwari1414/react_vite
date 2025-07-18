const addToCart = (data) => {
  data.quantity = 1;

  const localData = localStorage.getItem("cart");
  if (localData == null) {
    let tempArray = [];
    tempArray.push(data);
    localStorage.setItem("cart", JSON.stringify(tempArray));
  } else {
    let tempArray = JSON.parse(localData);
    const filterData = tempArray.filter((item) => item.id === data.id);
    if (filterData.length != 0) return;
    tempArray.push(data);
    localStorage.setItem("cart", JSON.stringify(tempArray));
  }
};

export default addToCart;
