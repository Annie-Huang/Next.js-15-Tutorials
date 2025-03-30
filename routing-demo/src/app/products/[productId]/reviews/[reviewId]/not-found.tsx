// http://localhost:3000/products/1/reviews/1001
// If this page does not exist, nextjs wil bubble up to find the first no-found page until it hit the root
export default function NotFound() {
  return (
    <div>
      <h2>Review Not Found</h2>
    </div>
  );
}
