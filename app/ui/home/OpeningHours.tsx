import React from 'react';

function OpeningHours() {
  return (
    <div className='w-screen min-h-60 mx-auto'>
      <h2 className='content-header'>Opening Hours</h2>
      <div className='bg-pizza text-white text-center flex flex-col gap-6 py-12'>
        <div>
          <h2 className='text-3xl'>Monday - Thursday</h2>
          <p className='text-xl'>9 &mdash; 21</p>
        </div>
        <div>
          <h2 className='text-3xl'>Friday - Saturday</h2>
          <p className='text-xl'>9 &mdash; 24</p>
        </div>
        <div>
          <h2 className='text-3xl'>Sunday</h2>
          <p className='text-xl'>9 &mdash; 20</p>
        </div>
      </div>
    </div>
  );
}

export default OpeningHours;
