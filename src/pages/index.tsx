import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { resolveLang, t } from "@/lib/i18n/messages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const lang = useMemo(() => resolveLang(router.query.lang), [router.query.lang]);

  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
        <div className="flex items-center justify-end">
          <div className="inline-flex items-center gap-2 rounded-xl border border-black/[.08] bg-white px-3 py-2 text-sm text-zinc-700 dark:border-white/[.145] dark:bg-black dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">{t(lang, "home.language")}:</span>
            <Link
              href={{ pathname: "/", query: { lang: "zh" } }}
              className="underline underline-offset-4"
            >
              中文
            </Link>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <Link
              href={{ pathname: "/", query: { lang: "en" } }}
              className="underline underline-offset-4"
            >
              English
            </Link>
          </div>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {t(lang, "home.title")}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          {t(lang, "home.subtitle")}
        </p>

        <nav className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">{t(lang, "nav.blog.title")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t(lang, "nav.blog.path")}
            </div>
          </Link>

          <Link
            href="/counter"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">{t(lang, "nav.counter.title")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t(lang, "nav.counter.path")}
            </div>
          </Link>

          <Link
            href="/demo-one"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">{t(lang, "nav.demoOne.title")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t(lang, "nav.demoOne.path")}
            </div>
          </Link>

          <Link
            href="/demo-two"
            className="rounded-xl border border-black/[.08] bg-white px-5 py-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <div className="text-lg font-medium">{t(lang, "nav.demoTwo.title")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t(lang, "nav.demoTwo.path")}
            </div>
          </Link>
        </nav>
      </main>
    </div>
  );
}
