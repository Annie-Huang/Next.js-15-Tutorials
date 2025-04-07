'use client';
// Error boundary have to be client component!!

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ color: 'red' }}>
      {error.message}
      {/* let user to retry to render the page.
       */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
