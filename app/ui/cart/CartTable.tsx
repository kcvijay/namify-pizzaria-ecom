import CartRow from './CartRow';
import { CartTableProps, ProductData } from '@/app/lib/definitions';

function CartTable({ cartItems, removeItem }: CartTableProps) {
  return (
    <table className='grow shadow-md rounded-md overflow-hidden'>
      <thead className='bg-sky-200'>
        <tr>
          <th className='px-3 py-4 text-left text-sky-800'>Image</th>
          <th className='px-3 py-4 text-left text-sky-800'>Product</th>
          <th className='px-3 py-4 text-center text-sky-800'>Unit Price</th>
          <th className='px-3 py-4 text-center text-sky-800'>Remove</th>
        </tr>
      </thead>

      <tbody>
        {cartItems.length > 0 &&
          cartItems.map((item: ProductData) => (
            <CartRow key={item.id} {...item} removeItem={removeItem} />
          ))}
      </tbody>
    </table>
  );
}

export default CartTable;
