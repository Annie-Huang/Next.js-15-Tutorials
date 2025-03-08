import { Product } from '@/components/product';
import { Reviews } from '@/components/reviews';

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Product />
      <Reviews />
    </div>
  );
}
