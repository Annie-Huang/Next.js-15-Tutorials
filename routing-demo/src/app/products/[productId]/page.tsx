import { Metadata } from 'next';

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  // Let's mirror scenario that we need to make an api call to get fetch further info for metadata:
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    // title: `Product - ${id}`,
    title: `Product - ${title}`,
  };
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
