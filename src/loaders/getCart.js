import { getStoredCart } from "../utils/fakeDB";


export const cartData = async () => {
  const productData = await fetch("jobFeatured.json");
  const products = await productData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (const data in savedCart) {
    const foundProduct = products.find(product.id === data);
    cart.push(foundProduct);
  }
  if (foundProduct) {
    foundProduct.quantity = savedCart[data];
  }
  return {cartArray, products}
};
