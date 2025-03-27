"use client";

import { Submit } from "@/components/submit";
import { useActionState } from "react";
import { createProduct, FormState } from "@/actions/products";

export default function EditProductForm() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState,
  );

  // Copy the form from react-form\page.tsx into here initially
  return (
    // <form action={createProduct} className="p-4 space-y-4 max-w-96">
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded bg-white"
            name="price"
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"*/}
      {/*  disabled={isPending}*/}
      {/*>*/}
      {/*  Add Product*/}
      {/*</button>*/}

      {/* The reason we separate the component is because useFormStatus can only be used in client component and we don't want to make this whole component a client component. */}
      <Submit />
    </form>
  );
}
