import { ProductData } from './definitions';

export const addToCart = (product: ProductData) => {
  try {
    const localCart = localStorage.getItem('cart') || '[]';
    if (localCart) {
      const cart = JSON.parse(localCart);

      // Checking if the product with same id is already in the cart.
      // If it is, increase the quantity by one.
      // If not, add the product to the cart with quantity of one.
      const existingProduct = cart.find(
        (item: ProductData) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else cart.push({ ...product, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFromCart = () => {
  try {
    const localCart = localStorage.getItem('cart') || '[]';
    if (localCart) {
      const cart = JSON.parse(localCart);
      return cart;
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id: string) => {
  try {
    const localCart = localStorage.getItem('cart') || '[]';
    if (localCart) {
      const cart = JSON.parse(localCart);

      // Remove the product with the given id from the cart
      // First, filter out the product with the given id
      // Then, reduce the quantity of the product by one
      // Finally, remove the product from the cart if the quantity is zero
      const updatedCart = cart
        .map((item: ProductData) => {
          if (item.id === id) {
            item.quantity -= 1;
          }
          return item;
        })
        .filter((item: ProductData) => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTotalCartAmount = (cart: ProductData[]) => {
  return cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, num) => acc + num, 0);
};

export const getTotalCartItems = (cart: ProductData[]) => {
  return cart.map((item) => item.quantity).reduce((acc, num) => acc + num, 0);
};

export const calculateALV = (price: number, alvRate: number) => {
  return ((price / (1 + alvRate)) * alvRate).toFixed(2);
};
