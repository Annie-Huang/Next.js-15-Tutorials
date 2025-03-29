import Form from 'next/form';

export const Search = () => {
  // Form component
  // 1. When the Form component becomes visible, it prefetch the loading UI associated with '/products-db' route
  // 2. When a user submits the search, it instantly navigates to the products page client-side and the form data gets turned into URL params
  //    E.g. entering 'product 3' will change url into http://localhost:3000/products-db?query=product+3
  // 3. it'll show the loading state while the search results are being fetched.
  // 4. once the data is ready, the results are displayed in the UI
  return (
    <Form action='/products-db' className='flex gap-2'>
      <input
        name='query'
        className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white'
        placeholder='Search products'
      />
      <button
        type='submit'
        className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Submit
      </button>
    </Form>
  );
};
