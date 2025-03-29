import { getProducts } from '@/prisma-db';
import Link from 'next/link';
import { removeProduct } from '@/actions/products';
import { useOptimistic } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  // https://react.dev/reference/react/useOptimistic
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    },
  );

  return (
    <ul className='space-y-4 p-4'>
      {products.map((product) => (
        <li
          key={product.id}
          className='p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
          <h2 className='text-xl font-semibold'>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className='text-lg font-medium'>${product.price}</p>
          <form action={removeProduct.bind(null, product.id)}>
            <button
              type='submit'
              className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600'
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
