import Link from 'next/link';

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href='products/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='products/2'>Product 2</Link>
      </h2>
      <h2>
        {/* Replace will remove the browser history so you cannot click browser back to go back to the previous page. */}
        <Link href='products/3' replace>
          Product 3
        </Link>
      </h2>
      <h2>
        {/* Dynamic link */}
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
