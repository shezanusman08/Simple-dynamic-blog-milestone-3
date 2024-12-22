// pages/blog/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { blogPost } from '../../../posts'; // Import the blog post data

import Image from 'next/image';
import CommentSection from '@/app/components/comment';

const PostPage = () => {
  const { id } = useParams(); // Use useParams to get the dynamic 'id' from the URL

  if (!id) {
    return <div>Loading...</div>; // Display loading state if 'id' is not yet available
  }

  // Find the post by id (convert the 'id' from string to number)
  const post = blogPost.find((p) => p.id === parseInt(id as string)); // Convert 'id' to a number and find the post

  if (!post) {
    return <div>Post not found</div>; // Display an error if the post with the given id doesn't exist
  }

  return (
    <main className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-4">
        <div className="rounded-md overflow-hidden mb-4">
          
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6 sm:text-xl">{post.title}</h1>
        <p className="text-lg mb-6 sm:text-lg">{post.smallDescription}</p>
        <p className='mt-8 text-xl mb-6 sm:text-sm'>{post.content}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Comments</h2>

          <CommentSection postId={post.id} />
        </div>
      </div>

      
    </main>
  );
};

export default PostPage;
