import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          简单演示主页-123-567-8888
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          这是一个最小示例：一个主页，两个其他页面。点击下面链接跳转。
        </p>

        <nav className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* <Link
            href="/blog"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">博客</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              /blog
            </div>
          </Link> */}

          <Link
            href="/counter"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">交互计数器</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              /counter
            </div>
          </Link>

          <Link
            href="/demo-one"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">页面一</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              /demo-one
            </div>
          </Link>

          <Link
            href="/demo-two"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">页面二</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              /demo-two
            </div>
          </Link>
        </nav>
      </main>
    </div>
  );
}
