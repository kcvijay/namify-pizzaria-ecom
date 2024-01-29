'use client';
import { useEffect, useState } from 'react';
import CartTable from '../ui/cart/CartTable';
import OrderSummary from '../ui/cart/OrderSummary';
import { getFromCart, removeFromCart } from '../lib/actions';
import { ProductData } from '../lib/definitions';
import EmptyCartCTA from '../ui/cart/EmptyCartCTA';
import Loader from '../ui/home/Loader';
import { isRestaurantOpen } from '../lib/openingHours';

function Cart() {
  const [cartItems, setCartItems] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const cartItems = getFromCart();
      setCartItems(cartItems);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Remove an item from cart and update the state. Page re-renders on cart items change.
  const handleRemoveItem = (id: string) => {
    try {
      removeFromCart(id);
      const updatedCartItems = getFromCart();
      setCartItems(updatedCartItems);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCartComponents = () => {
    if (isRestaurantOpen()) {
      if (loading) {
        return <Loader />;
      } else if (cartItems.length > 0) {
        return (
          <div className='flex gap-8 items-start flex-wrap text-sm md:text-base'>
            <CartTable cartItems={cartItems} removeItem={handleRemoveItem} />
            <OrderSummary cartItems={cartItems} />
          </div>
        );
      } else {
        return <EmptyCartCTA />;
      }
    } else
      return (
        <div className='text-slate-500 p-3 text-center leading-8'>
          <p className='text-3xl'>The restaurant is closed at the moment</p>
          <p>See you in the opening hours</p>
        </div>
      );
  };

  return (
    <main className='max-w-[1440px] mx-auto my-12 p-6'>
      <h2 className='content-header'>Cart</h2>
      {renderCartComponents()}
    </main>
  );
}

export default Cart;
