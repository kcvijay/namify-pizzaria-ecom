'use client';
import React, { use, useEffect, useState } from 'react';
import NavLogo from './NavLogo';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { getFromCart } from '@/app/lib/actions';

function Header() {
  const pathname = usePathname();
  const [cartitem, setCartitem] = useState(0);

  useEffect(() => {
    const cartItems = getFromCart();
    setCartitem(cartItems.length);
  }, [cartitem]);

  return (
    <header className='sticky top-0 bg-white flex justify-between items-center gap-2 p-4 shadow z-[999]'>
      <NavLogo />
      <nav className='flex items-center gap-6'>
        <Link
          className={clsx({
            'font-bold text-sky-700': pathname === '/',
          })}
          href='/'
        >
          Home
        </Link>
        <Link
          className={clsx({
            'font-bold text-sky-700': pathname === '/menu',
          })}
          href='/menu'
        >
          Menu
        </Link>
        
        <Link
          className={clsx('flex gap-2', {
            'font-bold text-sky-700': pathname === '/cart',
          })}
          href='/cart'
        >
          <span>Cart</span>
          <Image src='/cart.svg' alt='cart icon' width={18} height={18} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
