// This file is not optional, every nextjs project app/ folder must have one.
// If you delete this file and refresh http://localhost:3000, it will regenerate back.
import { Metadata } from 'next';

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// };
export const metadata: Metadata = {
  title: {
    default: 'Next.js Tutorial - Codevolution',
    template: '%s | Codevolution',
    absolute: '',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header
          style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
          }}
        >
          <p>Header</p>
        </header>
        {/* <ErrorWrapper> */}
        {children}
        {/* </ErrorWrapper> */}
        <footer
          style={{
            backgroundColor: 'ghostwhite',
            padding: '1rem',
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
