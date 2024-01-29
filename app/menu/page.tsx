import { productsData } from '../lib/placeholder-data';
import ProductCard from '../ui/products/ProductCard';

export default function Menu() {
  return (
    <div className='max-w-[1440px] mx-auto my-12 p-6'>
      <h2 className='content-header'>Pizza & Pasta</h2>
      <div className='grid-autofit gap-6 text-sm md:text-base'>
        {productsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
