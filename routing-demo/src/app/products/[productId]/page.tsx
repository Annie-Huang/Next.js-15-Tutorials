type Props = {
  params: Promise<{ productId: string }>;
};

// export default function ProductDetails() {
/*export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {*/
export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
