import React from 'react';
import Link from 'next/link';

const NewsArticle = () => {
  return (
    <div>
      <h1>News Article id</h1>
      <p>Reading in language</p>

      {/* Language switcher */}
      <div className='language-options'>
        <Link href={`/articles/id?lang=en`}>English</Link> |
        <Link href={`/articles/id?lang=es`}>Español</Link> |
        <Link href={`/articles/id?lang=fr`}>Français</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
