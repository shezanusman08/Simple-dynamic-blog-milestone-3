// components/Comment.tsx
import { useState } from 'react';

interface Comment {
  name: string;
  content: string;
}

const CommentSection = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && content) {
      setComments([...comments, { name, content }]);
      setName('');
      setContent('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium">Your Comment</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md"
            rows={4}
            placeholder="Enter your comment"
          />
        </div>

        {/* Custom Button with text */}
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-6">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="border-b pb-4 mb-4">
                <p className="font-semibold">{comment.name}</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
