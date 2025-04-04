'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Need to bring global css here to see effect.
import './styles.css';
import { useState } from 'react';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');

  // The usePathname can only be with a client component.
  const pathname = usePathname();
  console.log('pathname=', pathname);

  return (
    <div>
      {/* Use template.tsx rather than layout.tsx if you want to have fresh set of layout file content for each navigation routes
          Enter something in input field and you can see it is gone when you navigate between register|login|forgot password, even though it's in the template file.
      */}
      <div style={{ border: '1px solid red', width: 'max-content' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== '/');

        return (
          <Link
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
