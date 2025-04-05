'use client';
// Error boundary have to be client component!!

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div style={{ color: 'red' }}>{error.message}</div>;
}
