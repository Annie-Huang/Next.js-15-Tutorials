import React from 'react';
import Link from 'next/link';

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) => {
  const { articleId } = await params;
  // get the searchParam of lang, if it is not coming in, default it as 'en'
  const { lang = 'en' } = await searchParams;

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div className='language-options'>
        {/*<Link href={`/articles/id?lang=en`}>English</Link> |*/}
        {/*<Link href={`/articles/id?lang=es`}>Español</Link> |*/}
        {/*<Link href={`/articles/id?lang=fr`}>Français</Link>*/}
        <Link href={`/articles/${articleId}?lang=en`}>English</Link> |
        <Link href={`/articles/${articleId}?lang=es`}>Español</Link> |
        <Link href={`/articles/${articleId}?lang=fr`}>Français</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
