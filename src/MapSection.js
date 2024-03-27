import React from 'react';

const MapSection = () => {
  return (
    <div className="map-section">
      <iframe
        title="Map"
        src="https://snazzymaps.com/style/116734/sg-test-exercise"
        style={{ border:0 }}
        allowFullScreen="yes"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default MapSection;
