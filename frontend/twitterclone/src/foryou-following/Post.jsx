import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);
  const [emoji, setEmoji] = useState('');

  const handlePost = async () => {
    // Implement your post logic here
    const formData = new FormData();
    formData.append('content', text);
    if (media) {
      formData.append('media', media);
    }
    formData.append('emoji', emoji);

    try {
      const response = await axios.post('http://localhost:5000/tweets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting tweet:', error);
    }

    // Reset the form after posting
    setText('');
    setMedia(null);
    setEmoji('');
  };

  return (
    <div className="bg-white mt-6 border border-gray-200 rounded-lg shadow-sm p-4">
      <textarea
        className="w-full p-2 mb-2 resize-none outline-none"
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-between items-center mb-2">
        <input
          type="file"
          className="hidden"
          id="media-upload"
          onChange={(e) => setMedia(e.target.files[0])}
        />
        <label htmlFor="media-upload" className="flex items-center space-x-2 cursor-pointer text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Add photo or video</span>
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handlePost}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Post;
