'use client';
// Error boundary have to be client component!!

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

// !!!! Move the error.tsx from /products/[productId], into /products/ level, so it can catch error listed in the /products/[productId]/layout.tsx file. Otherwise it will how throw error because it's outside of the error boundary.

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div style={{ color: 'red' }}>
      {error.message}
      {/* let user to retry to render the page. But this have to be a client side page.
          server side recovery has to use start transition (from react) + use router (from next)
      */}
      {/*<button onClick={() => reset()}>Try again</button>*/}

      {/* 1. First keep refreshing http://localhost:3000/products/1/reviews/1 until you see the error.tsx page.
          2. Then keep clicking the 'Try again' button until you see you recover from rendering on http://localhost:3000/products/1/reviews/1

          Also note that if you move this error files into app/products/ level and repeat the above steps again, you will not see the 'Features products' text when error occurs,
          That is because it will bubble up until it see the first error.tsx and then replace the whole thing underneath.
      */}
      <button onClick={reload}>Try again</button>
    </div>
  );
}
