import React from 'react';
import './Dummy.css';

const SocialPost = ({ image, text, username, likes, comments }) => {
  return (
    <div className="social-post">
      <div className="social-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="social-text">{text}</div>
      <div className="social-stats">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

const Dummy = () => {
  // Dummy data, replace with your own
  const posts = [
    { username: '@love_food', likes: '99.7K', comments: '789', text: 'Waffle sticks in Copenhagen!', image: 'path_to_image' },
    { username: '@buzzfeedfood', likes: '14.7K', comments: '60', text: "It's taco Tuesday!", image: 'path_to_image' },
    // Add more posts as needed
  ];

  return (
    <div className="container">
      
      {posts.map((post, index) => (
        <SocialPost key={index} {...post} />
      ))}
    </div>
  );
};

export default Dummy;
