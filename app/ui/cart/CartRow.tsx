import { ProductData } from '@/app/lib/definitions';
import Image from 'next/image';

function CartRow({ ...props }: ProductData) {
  return (
    <tr className='border-b'>
      <td className='p-3 text-left'>
        <Image
          className='w-24 aspect-video object-cover'
          src={props.image}
          alt={props.productTitle}
          width={96}
          height={75}
        />
      </td>
      <td className='p-3 text-left'>{props.productTitle}</td>
      <td className='p-3 text-center' data-test-id='unitPrice'>
        <span className='text-sm text-orange-500 mr-1'>{props.quantity} x</span>
        {props.price.toFixed(2)} €
      </td>
      <td className='p-3 text-center'>
        <button
          className='bg-red-100 p-2 text-sm rounded-md text-red-700 hover:bg-red-200 transition-all'
          onClick={() => props.removeItem && props.removeItem(props.id)}
        >
          <Image src='/bin.svg' alt='Remove from cart' width={14} height={14} />
        </button>
      </td>
    </tr>
  );
}

export default CartRow;
