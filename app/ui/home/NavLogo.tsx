import { lemon } from '@/app/lib/fonts';
import Link from 'next/link';
import React from 'react';

function NavLogo() {
  return (
    <Link
      className={`${lemon.className} text-3xl font-bold text-orange-500`}
      href='/'
    >
      NAMIFY
    </Link>
  );
}

export default NavLogo;
