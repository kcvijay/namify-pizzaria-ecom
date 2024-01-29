import React from 'react';

function About() {
  return (
    <div className='max-w-[1440px] mx-auto my-12 px-6'>
      <h2 className='content-header'>About This App</h2>
      <div className='mt-6 leading-[3]'>
        <p className='text-xl font-bold'>
          This is a demo app which satisfies the requirements of Wolt Summer
          Trainee 2024 Frontend Task.
        </p>
        <p>
          The application is created using Next.js, TypeScript and Tailwind CSS.
        </p>
        <p>The application has afew more features than the requirements:</p>
        <ul className='ml-12 text-slate-600'>
          <li className='list-disc'>
            Users can choose food products from the homepage.
          </li>
          <li className='list-disc'>Choosen products are added to Cart.</li>
          <li className='list-disc'>Products can be removed from the Cart.</li>
          <li className='list-disc'>Cart is saved to LocalStorage.</li>
        </ul>
        <p>
          Fees consists of 3 separate fees, Base Delivery Fee, Surcharge and
          Bulk Fee. Requirements considered to calculate the total delivery fees
          are:
        </p>
        <ul className='ml-12 text-slate-600'>
          <li className='list-disc'>
            If total order amount exceeds 200 €, total delivery fee is 0 €.
          </li>
          <li className='list-disc'>
            If order amount is less than 10 €, a surcharge is charged. The
            surchrge is the difference between 10 € and the order amount.
          </li>
          <li className='list-disc'>
            If order items are less than 4, Base Delivery Fee is 0 €. Each more
            than 4 and less than 12 items add 0.50 €. More than 12 items add
            1.20 € on the top of that.
          </li>
          <li className='list-disc'>
            If delivery distance is less than 1000 meters, base delivery fee is
            2 €. Every exceeding 500 meters adds 1 € to the base delivery fee.
          </li>
          <li className='list-disc'>
            If order is placed on Friday between 15pm -19pm (Friday Rush),
            delivery fee is multiplied by 1.20.
          </li>
          <li className='list-disc'>
            Total Delivery Fee cannot be more than 15 €.
          </li>
        </ul>
      </div>
      <h2 className='text-lg mt-6'>
        Thank you for visiting this page. 🙏
      </h2>
      <p className='mt-3 text-slate-500 text-sm'>With ❤️ created by Vijay K.C. </p>
    </div>
  );
}

export default About;
