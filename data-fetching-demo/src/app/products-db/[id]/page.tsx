import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // These 2 is for server component, cannot use 'use client'
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  return <EditProductForm product={product} />;
}
