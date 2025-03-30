'use client';
import { usePathname } from 'next/navigation';

// http://localhost:3000/products/1/reviews/1001
// If this page does not exist, nextjs wil bubble up to find the first no-found page until it hit the root
//
// Also not-found page cannot pass in parameter, if you need to use params info, make a call to usePathname call. Need to be a client component to use usePathname
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];

  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
}
