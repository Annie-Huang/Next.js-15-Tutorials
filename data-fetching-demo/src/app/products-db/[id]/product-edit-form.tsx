'use client';

import { Submit } from '@/components/submit';
import { useActionState } from 'react';
import { editProduct, FormState } from '@/actions/products';
import type { Product } from '@/app/products-db/page';

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  // I actually prefer the <input type='hidden' name='id' value={product.id} /> in the template as I don't quite under the .bind function.
  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    // editProduct,
    editProductWithId,
    initialState,
  );

  // Copy the form from react-form\page.tsx into here initially
  return (
    // <form action={createProduct} className="p-4 space-y-4 max-w-96">
    <form action={formAction} className='p-4 space-y-4 max-w-96'>
      <div>
        <label className='text-white'>
          Title
          <input
            type='text'
            className='block w-full p-2 text-black border rounded bg-white'
            name='title'
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className='text-red-500'>{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className='text-white'>
          Price
          <input
            type='number'
            className='block w-full p-2 text-black border rounded bg-white'
            name='price'
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className='text-red-500'>{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className='text-white'>
          Description
          <textarea
            className='block w-full p-2 text-black border rounded bg-white'
            name='description'
            defaultValue={product.description ?? ''}
          />
        </label>
        {state.errors.description && (
          <p className='text-red-500'>{state.errors.description}</p>
        )}
      </div>
      {/*      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Add Product
      </button>*/}

      {/* The reason we separate the component is because useFormStatus can only be used in client component and we don't want to make this whole component a client component. */}
      <Submit />
    </form>
  );
}
