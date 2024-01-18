import React, { useState, useRef } from 'react';
import './ourStory.css';
import dogVideo from "../assets/dogs.mp4";

const storyHeading = 'Our Story';

function OurStory() {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPaused(video.paused);
  };

  return (
    <div className="video-story-container">
      <div className="video-wrapper">
        <video
          controls
          src={dogVideo}
          className="video"
          onClick={handlePlayPause}
          ref={videoRef}
        />
      </div>
      <div className="text-container">
        <h1><b>{storyHeading}</b></h1>
        <p>Tasty dog treats = more joyful tail wags.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default OurStory;
