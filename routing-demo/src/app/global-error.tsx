'use client'; // Error boundaries must be Client Components

import './globals.css';

// This file only work in production mode, in order to see it, do:
// npm run build
// npm run start
// http://localhost:3000/
export default function GlobalError() {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h2 className='text-2xl font-bold mb-4'>Something went wrong!</h2>
          <button
            onClick={() => {
              // refresh the page
              window.location.reload();
            }}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
