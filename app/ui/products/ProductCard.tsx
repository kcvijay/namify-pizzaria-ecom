'use client';
import { addToCart } from '@/app/lib/actions';
import { ProductData } from '@/app/lib/definitions';
import { isRestaurantOpen } from '@/app/lib/openingHours';
import Image from 'next/image';

function ProductCard({ ...props }: ProductData) {
  function handleAddToCart() {
    try {
      addToCart(props);
      alert('Item added to cart.');
    } catch (error) {
      alert('Something went wrong. ' + error + ' Please try again.');
      console.log(error);
    }
  }
  const renderCartButton = () => {
    if (isRestaurantOpen()) {
      return (
        <button
          className='btn btn-add-cart w-full'
          onClick={() => handleAddToCart()}
        >
          + Add to Cart
        </button>
      );
    } else {
      return (
        <button
          className='btn btn-add-cart w-full btn-disabled'
          disabled={!isRestaurantOpen()}
          onClick={() => alert('Restaurant is closed at the moment.')}
        >
          Restaurant Closed
        </button>
      );
    }
  };
  return (
    <div className='min-w-[320px] p-4 border rounded-md shadow'>
      <figure className='relative'>
        <Image
          className='w-full h-auto aspect-video object-cover rounded-md'
          src={props.image}
          alt={props.productTitle}
          width={320}
          height={100}
        />
        {props.isVegan && (
          <span className='badge badge-vegan absolute right-2 bottom-2 border-2'>
            Vegan
          </span>
        )}
      </figure>
      <div className='mt-6'>
        <h3 className='text-xl text-slate-700'>{props.productTitle}</h3>
        <p className='mt-2 text-slate-500 min-h-12'>{props.productDetails}</p>
      </div>
      <div className='mt-4'>
        <p className='text-2xl text-right mb-4 text-sky-700'>
          {props.price.toFixed(2)} <span className='text-base'>€</span>
        </p>
        {renderCartButton()}
      </div>
    </div>
  );
}

export default ProductCard;
