// 'use client';
// import { useState } from 'react';
import { Counter } from '@/app/counter/counter';

export const metadata = {
  title: 'Counter',
};

export default function CounterPage() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <p>Count: {count}</p>
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //   </div>
  // );

  return <Counter />;
}
