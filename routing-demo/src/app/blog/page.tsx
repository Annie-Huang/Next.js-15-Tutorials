import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Blog',
  title: {
    absolute: 'blog',
  },
};

// export default function Blog() {
export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('intentional delay'); // add delay in order to see loading page.
    }, 2000);
  });

  return <h1>My blog</h1>;
}
