'use client';

import Link from 'next/link';
import { removeProduct } from '@/actions/products';
import { useOptimistic } from 'react';
import Form from 'next/form';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export function ProductDetail({ products }: { products: Product[] }) {
  // https://react.dev/reference/react/useOptimistic
  // useOptimistic is a React Hook that lets you show a different state while an async action is underway.
  // It accepts some state as an argument and returns a copy of that state that can be different during the duration of an async action such as a network request.
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    },
  );

  // This immediately shows the user their changes while the actual deletion happens in the background
  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <ul className='space-y-4 p-4'>
      {/*{products.map((product) => (*/}
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className='p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
          <h2 className='text-xl font-semibold'>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className='text-lg font-medium'>${product.price}</p>
          {/*<form action={removeProduct.bind(null, product.id)}>*/}
          <Form action={removeProductById.bind(null, product.id)}>
            <button
              type='submit'
              className='px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600'
            >
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
