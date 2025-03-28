import { getProduct } from '@/prisma-db';
import EditProductForm from './product-edit-form';
import type { Product } from '@/app/products-db/page';
import { notFound } from 'next/navigation';

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // These 2 is for server component, cannot use 'use client'
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
