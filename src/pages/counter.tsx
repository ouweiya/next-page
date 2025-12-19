'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function CounterPage() {
    const [count, setCount] = useState(0);

    const hint = useMemo(() => {
        if (count === 0) return '从 0 开始。';
        if (count > 0) return '当前是正数。';
        return '当前是负数。';
    }, [count]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
                <div className="flex items-baseline justify-between gap-4">
                    <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">交互计数器</h1>
                    <Link href="/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        返回首页
                    </Link>
                </div>

                <p className="mt-3 text-zinc-600 dark:text-zinc-400">这是一个最小的 Client Component 示例（useState）。</p>

                <section className="mt-10 rounded-xl border border-black/[.08] bg-white px-6 py-6 dark:border-white/[.145] dark:bg-black">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">当前计数</div>
                    <div className="mt-2 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">{count}</div>
                    <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{hint}</div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => setCount((c) => c - 1)}
                            className="rounded-xl border border-black/[.08] bg-white px-4 py-2 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
                        >
                            -1
                        </button>
                        <button
                            type="button"
                            onClick={() => setCount((c) => c + 1)}
                            className="rounded-xl border border-black/[.08] bg-white px-4 py-2 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
                        >
                            +1
                        </button>
                        <button
                            type="button"
                            onClick={() => setCount(0)}
                            className="rounded-xl border border-black/[.08] bg-white px-4 py-2 text-sm transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
                        >
                            重置
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
