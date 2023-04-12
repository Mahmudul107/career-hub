import { getStoredCart } from "../utils/fakeDB";


export const cartData = async () => {
  const productData = await fetch("/jobFeatured.json");
  const products = await productData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (const id in savedCart) {
    const foundProduct = products.find(product =>product.id === id);
    if (foundProduct) {
        foundProduct.quantity = savedCart[id];
      }
    console.log(foundProduct);
    cartArray.push(foundProduct);
  }
  
  return {cartArray, products}
};
