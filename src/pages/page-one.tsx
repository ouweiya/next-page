import Link from 'next/link';

export default function PageOne() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>页面一</h1>
      <p>这是一个简单的演示页面。</p>
      <ul>
        <li><Link href="/">返回主页</Link></li>
        <li><Link href="/page-two">前往页面二</Link></li>
      </ul>
    </main>
  );
}
