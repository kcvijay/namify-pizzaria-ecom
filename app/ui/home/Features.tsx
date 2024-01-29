import Image from 'next/image';

function Features() {
  return (
    <div className='py-12 px-6'>
      <div className='max-w-[1440px] mx-auto grid-autofit gap-6'>
        <div className='min-w-[320px] rounded-2xl p-4'>
          <figure className='bg-orange-500 max-w-fit p-3 rounded-xl'>
            <Image
              className='invert'
              src='/pizza-icon.png'
              alt='icon of a pizza'
              width={50}
              height={50}
            />
          </figure>
          <div className='mt-4'>
            <h2 className='text-2xl text-orange-600'>Delicious Recipes</h2>
            <p className='mt-2 text-slate-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              commodi distinctio nesciunt corporis fuga reiciendis optio ea,
              perferendis hic alias repellendus doloribus id, voluptates quasi.
            </p>
          </div>
        </div>

        <div className='min-w-[320px] rounded-2xl p-4'>
          <figure className='bg-orange-500 max-w-fit p-3 rounded-xl'>
            <Image
              className='invert'
              src='/delivery-icon.png'
              alt='icon of a pizza'
              width={50}
              height={50}
            />
          </figure>
          <div className='mt-4'>
            <h2 className='text-2xl text-orange-600'>Delivery @ Your Door</h2>
            <p className='mt-2 text-slate-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              commodi distinctio nesciunt corporis fuga reiciendis optio ea,
              perferendis hic alias repellendus doloribus id, voluptates quasi.
            </p>
          </div>
        </div>
        <div className='min-w-[320px] rounded-2xl p-4'>
          <figure className='bg-orange-500 max-w-fit p-3 rounded-xl'>
            <Image
              className='invert'
              src='/food-pickup-icon.png'
              alt='icon of a pizza'
              width={50}
              height={50}
            />
          </figure>
          <div className='mt-4'>
            <h2 className='text-2xl text-orange-600'>Pickup From Us</h2>
            <p className='mt-2 text-slate-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              commodi distinctio nesciunt corporis fuga reiciendis optio ea,
              perferendis hic alias repellendus doloribus id, voluptates quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
