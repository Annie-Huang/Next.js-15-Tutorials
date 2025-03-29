import { getProducts } from '@/prisma-db';
import { ProductDetail } from '@/app/products-db/product-detail';

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

  // Shift the entire code into <ProductDetail> as the useOptimistic required to be a client component
  return <ProductDetail products={products} />;
}
