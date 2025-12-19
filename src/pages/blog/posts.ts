import { useEffect } from 'react';
import { useRouter } from 'next/router';

export type { BlogPost } from '../../lib/blog/posts';
export { BLOG_POSTS, getAllPosts, getPostBySlug } from '../../lib/blog/posts';

export default function BlogPostsRedirectPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/blog');
    }, [router]);

    return null;
}
