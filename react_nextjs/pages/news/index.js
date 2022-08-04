import Link from 'next/link';
// my-domain.com/news

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}

export default NewsPage;
