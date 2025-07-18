import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../Database/fireStoreDB";

const getProductData = async (setProductData) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log("snaphot", querySnapshot);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductData(products);
  } catch (error) {
    console.log("Error fetching product data:", error);
  }
};
export default getProductData;
