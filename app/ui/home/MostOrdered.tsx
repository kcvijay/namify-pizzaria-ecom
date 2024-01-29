import { productsData } from '@/app/lib/placeholder-data';
import Image from 'next/image';
import Link from 'next/link';

function MostOrdered() {
  return (
    <div className='w-screen bg-orange-400 py-12 px-6'>
      <h2 className='content-header text-white'>Most Ordered This Week</h2>
      <div className='max-w-[1440px] mx-auto flex justify-center items-center flex-wrap gap-12'>
        {productsData.slice(2, 5).map((product) => (
          <Link
            href='/menu'
            key={product.id}
            className='bg-white rounded-xl shadow-xl hover:shadow-none'
          >
            <div className='text-center p-4'>
              <figure className='w-48 h-48'>
                <Image
                  className='w-full h-full object-cover rounded-xl'
                  src={product.image}
                  alt={product.productTitle}
                  width={256}
                  height={256}
                />
              </figure>
              <h3 className='text-xl mt-6 text-slate-500'>{product.productTitle}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MostOrdered;
