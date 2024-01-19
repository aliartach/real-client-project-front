import React, { useState, useRef,useEffect } from 'react';
import './ourStory.css';
import dogVideo from "../assets/dogs.mp4";
import axios from "axios";


function OurStory() {
  // const [isPaused, setIsPaused] = useState(false);
  // const videoRef = useRef(null);
  const[storyDescription,setStoryDescription]=useState("")
  // const handlePlayPause = () => {
  //   const video = videoRef.current;

  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.ispause();
  //   }

  //   setIsPaused(video.ispaused);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/content');
        const data = response.data;
  
        // Check if data is an array and has at least one item
        if (Array.isArray(data) && data.length > 0) {
          setStoryDescription(data[0].storyDescription);
        } else {
          console.error('No story description found in the response data.');
        }
      } catch (error) {
        console.error('Error fetching storyDescription:', error.message);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array to run the effect only once
  return (
    <div className="video-story-container">
      <div className="video-wrapper">
        <video
          controls
          src={dogVideo}
          className="video"
          // onClick={handlePlayPause}
          // ref={videoRef}
        />
      </div>
      <div className="text-container">
        <h1><b>Our Story</b></h1>
        <p>{storyDescription}</p>
      </div>
    </div>
  );
}

export default OurStory;
