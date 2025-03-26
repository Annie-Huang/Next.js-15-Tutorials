import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { Submit } from "@/components/submit";
import { useActionState } from "react";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState,
  );

  async function createProduct(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    const errors: Errors = {};

    if (!title) {
      errors.title = "Title is required";
    }

    if (!price) {
      errors.price = "Price is required";
    }

    if (!description) {
      errors.description = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }

  // Copy the form from react-form\page.tsx into here initially
  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
          />
        </label>
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
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
          />
        </label>
      </div>
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"*/}
      {/*>*/}
      {/*  Add Product*/}
      {/*</button>*/}

      {/* The reason we separate the component is because useFormStatus can only be used in client component and we don't want to make this whole component a client component. */}
      <Submit />
    </form>
  );
}
