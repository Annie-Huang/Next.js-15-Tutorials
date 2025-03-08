import React from 'react';

const Page = () => {
  console.log('About server component');
  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
};

export default Page;
