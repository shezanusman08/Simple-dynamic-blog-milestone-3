import Link from 'next/link';
import Image from 'next/image';
import { blogPost } from '@/posts';

export interface IBlogPage {
  id: number;
  title: string;
  smallDescription: string;
  content: string
  image: string;
}

const BlogPage = () => {
  return (
    <main className="container mx-auto p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPost.map((blogPost) => (
          <div key={blogPost.id} className="bg-white shadow rounded-lg p-4">
            <div className="rounded-md overflow-hidden mb-4">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <h2 className="text-lg font-semibold mb-2">{blogPost.title}</h2>
            <p className="text-sm mb-4">{blogPost.smallDescription}</p>

            <Link href={`/blog/${blogPost.id}`} className="text-blue-500 mt-4 block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
