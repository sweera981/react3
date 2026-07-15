{/*import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data.slice(0, 5));
      })
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const Like = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCommentClick = async (id) => {
    if (comments[id]?.data) {
      setComments(prev => ({
        ...prev,
        [id]: { ...prev[id], show: !prev[id].show }
      }));
      return;
    }

    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(prev => ({
        ...prev,
        [id]: { data: res.data, show: true }
      }));
    } catch (err) {
      console.error("Error fetching comments", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-center text-3xl font-bold mb-8">My Posts Assignment</h1>
      <div className="flex flex-col items-center gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 border-2 border-blue-600 p-6 rounded-xl w-full max-w-2xl">
            <h3 className="text-xl font-semibold text-blue-500 mb-3 capitalize">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.body}</p>

            <div className="flex gap-4 items-center">
              <button onClick={() => Like(post.id)} className="text-2xl">
                {likedPosts[post.id] ? '❤️' : '🤍'}
              </button>
              <button onClick={() => handleCommentClick(post.id)} className="bg-blue-600 px-4 py-1 rounded">
                Comments
              </button>
            </div>

            {comments[post.id]?.show && (
              <div className="border-t pt-3 mt-3">
                <h3 className="font-semibold mb-2">Comments:</h3>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {comments[post.id]?.data?.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold text-sm text-black">{comment.name}</p>
                      <p className="text-xs text-gray-500">{comment.email}</p>
                      <p className="text-sm text-gray-700 mt-1">{comment.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post*/}