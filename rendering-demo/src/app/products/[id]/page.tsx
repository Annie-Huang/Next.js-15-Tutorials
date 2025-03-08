// export const dynamicParams = false;
// It is set to true by default by generateStaticParams, which means you can get http://localhost:3000/products/4 and it will be generated under the .next folder when request.
// If you set it to false, then the page will return a 404 when you request http://localhost:3000/products/4

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details at {new Date().toLocaleTimeString()}
    </h1>
  );
}
