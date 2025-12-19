import Link from 'next/link';

export default function PageTwo() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>页面二</h1>
      <p>这是另一个简单的演示页面。</p>
      <ul>
        <li><Link href="/">返回主页</Link></li>
        <li><Link href="/page-one">前往页面一</Link></li>
      </ul>
    </main>
  );
}
