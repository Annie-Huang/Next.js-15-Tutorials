import { getProducts } from '@/prisma-db';
import { ProductDetail } from '@/app/products-db/product-detail';
import Link from 'next/link';

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

  console.log(products);

  // Shift the entire code into <ProductDetail> as the useOptimistic required to be a client component
  return (
    <>
      <ProductDetail products={products} />
      <Link
        href='/products-db-create'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4'
      >
        Create a new product
      </Link>
    </>
  );
}
