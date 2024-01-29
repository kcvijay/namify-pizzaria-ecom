import { chefs } from '@/app/lib/placeholder-data';
import Image from 'next/image';

function MeetChefs() {
  return (
    <div className='max-w-[1440px] mx-auto py-12'>
      <h2 className='content-header'>Meet Our Chefs</h2>
      <div className='grid-autofit gap-6 px-6'>
        {chefs.map((chef) => (
          <div key={chef.id} className='flex gap-4 items-center'>
            <Image
              src={chef.image}
              alt={chef.name}
              className='w-32 h-32 rounded-full'
              width={300}
              height={300}
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl'>{chef.name}</h3>
              <p className='text-slate-500'>{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetChefs;
