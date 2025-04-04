import { notFound, redirect } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // will return either 0 or 1
  const random = getRandomInt(2);
  // Will load the error.tsx when we get into error, you can keep refreshing the page a few times and you will see it.
  // But keep in mind that the rest of the component, like the layout and the [productId]/page.tsx still shows.
  // Only the [reviewId]\page.tax section has been replaced by the error.tsx
  if (random === 1) {
    throw new Error('Error loading review');
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
    // redirect('/products');
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
