import Link from 'next/link';
import type { GetStaticProps } from 'next';

import type { BlogPost } from '../../lib/blog/posts';
import { getAllPosts } from '../../lib/blog/posts';

type PageProps = {
    posts: Array<Pick<BlogPost, 'slug' | 'title' | 'date' | 'excerpt'>>;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const posts = getAllPosts().map(({ slug, title, date, excerpt }) => ({
        slug,
        title,
        date,
        excerpt,
    }));

    return {
        props: {
            posts,
        },
    };
};

export default function BlogIndexPage({ posts }: PageProps) {

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl px-6 py-24 sm:px-10">
                <div className="flex items-baseline justify-between gap-4">
                    <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">博客</h1>
                    <Link href="/" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        返回首页
                    </Link>
                </div>

                <p className="mt-3 text-zinc-600 dark:text-zinc-400">两篇示例文章，演示列表与详情路由。</p>

                <section className="mt-10 grid gap-4">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="rounded-xl border border-black/8 bg-white px-5 py-4 transition-colors hover:bg-black/4 dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <div className="text-lg font-medium">{post.title}</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">{post.date}</div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</div>
                            <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">/blog/{post.slug}</div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}
