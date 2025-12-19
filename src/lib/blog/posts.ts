export type BlogPost = {
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
    excerpt: string;
    content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'hello-nextjs',
        title: '你好，Next.js 博客（示例）',
        date: '2025-12-18',
        excerpt: '用最小的方式在 App Router 里做一个博客列表 + 详情页。',
        content: [
            '这是一篇示例文章，用来演示「/blog 列表」与「/blog/[slug] 详情」两种路由。',
            '文章内容直接写在代码里，适合做最小可用的 demo；如果后续要支持 Markdown/MDX 或 CMS，再替换数据来源即可。',
            '这一页的 URL 形如：/blog/hello-nextjs。',
        ],
    },
    {
        slug: 'routing-notes',
        title: 'App Router 路由小记（示例）',
        date: '2025-12-18',
        excerpt: '用动态路由 + notFound 处理不存在的文章。',
        content: [
            '在 Next.js App Router 中，可以用 app/blog/[slug]/page.tsx 来声明动态详情页。',
            '如果传入的 slug 找不到对应文章，可以调用 next/navigation 的 notFound() 返回 404。',
            '同时配合 generateStaticParams()，可以让示例文章在构建时预渲染。',
        ],
    },
];

export function getAllPosts(): BlogPost[] {
    return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}
