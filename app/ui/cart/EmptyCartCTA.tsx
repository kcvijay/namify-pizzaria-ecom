import Link from 'next/link';
import React from 'react';

function EmptyCartCTA() {
  return (
    <div className='max-w-full text-center'>
      <h3 className='text-2xl md:text-4xl font-bold text text-slate-500'>
         Hungry yet? 😵‍💫
      </h3>
      <Link
        className='inline-block mt-6 bg-orange-200 text-orange-700 py-2 px-6 rounded-md hover:bg-orange-300 transition-all'
        href='/menu'
      >
        Pick something from the menu
      </Link>
    </div>
  );
}

export default EmptyCartCTA;
