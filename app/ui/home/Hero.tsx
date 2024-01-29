import { calculateDeliveryFee, findCityWisePrice } from '@/app/lib/fee';
import { lemon } from '@/app/lib/fonts';
import { isRestaurantOpen } from '@/app/lib/openingHours';
import Link from 'next/link';

function Hero() {
  const renderRestaurantOpenBadge = () => {
    if (isRestaurantOpen()) {
      return (
        <span className='hero-badge badge-restaurant-open absolute top-0 left-0'>
          We&apos;re Open
        </span>
      );
    } else {
      return (
        <span className='hero-badge badge-restaurant-closed absolute top-0 left-0'>
          We&apos;re Closed
        </span>
      );
    }
  };
  return (
    <div className='max-screen h-[85vh] relative bg-hero'>
      <div className='flex justify-center items-center text-center flex-col gap-6 p-6 h-full w-full text-white'>
        <h2
          className={`${lemon.className} text-[40px] md:text-[48px] text-wrap font-bold transition-all duration-200`}
        >
          NAMIFY YOUR HUNGER
        </h2>
        <p className='text-[20px] md:text-[24px] tracking-wide transition-all duration-200'>
          Deliciousness at your service
        </p>
        <Link href='/menu' className='btn btn-hero-cta'>
          Order now
        </Link>
      </div>
      {renderRestaurantOpenBadge()}
    </div>
  );
}

export default Hero;
