'use client';
// Error boundary have to be client component!!

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

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
      */}
      <button onClick={reload}>Try again</button>
    </div>
  );
}
