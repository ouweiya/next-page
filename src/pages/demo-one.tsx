import Link from "next/link";

export default function DemoOnePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          页面一
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          这是第一个演示子页面。
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-solid border-black/[.08] px-5 py-2 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            返回主页
          </Link>
        </div>
      </main>
    </div>
  );
}
