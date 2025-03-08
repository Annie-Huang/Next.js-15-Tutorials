import React from 'react';
import { cookies } from 'next/headers';

const Page = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);
  console.log('About server component');
  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
};

export default Page;
