import React from 'react';
import './CommunitySection.css';
// Import your images here
import postImage1 from './Assets/Hero.jpeg';
import postImage2 from './Assets/Hero.jpeg';
// Repeat for all images

const CommunitySection = () => {
  return (
    <section className="community-section">
      <h2 className="community-title">MEET OUR COMMUNITY</h2>
      <div className="community-content">
        <div className="community-text-block">
          <p>Lorem ipsum dolor sit amet...</p>
          <button className="know-more-btn">KNOW MORE</button>
        </div>
        <div className="community-posts">
          {/* Repeat this block for each post/image */}
          <div className="post">
            <img src={postImage1} alt="Food Post" />
            <p>@username</p>
            {/* Add other post details */}
          </div>
          {/* ... other posts */}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
