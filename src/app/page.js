"use client"

import React, {useState, useEffect} from 'react';
import PageHeader from "./components/PageHeader";
import VideoPlaylist from "./components/VideoPlaylist";
import VideoMainBody from "./components/VideoMainBody";
import VideoControlsBar from "./components/VideoControlsBar";

export default function Home() {
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  
  // useEffect(() => {
  //   fetch('/public/data/playlist.json').then((res) => res.json()).then((data) => setVideos(data))
  // }, []);

  // console.log(videos);

  const [sidebarShow, setSidebarShow] = useState(true)

  const toggleSidebarVisibility = () => {
    setSidebarShow(!sidebarShow);
  }

  const hideSidebar = () => {
    setSidebarShow(false);
  };

  // console.log(window.innerWidth);
  
  window.onload = function() {
    if (window.innerWidth <= 1200) {
      setSidebarShow(false)
      // console.log("hello");
      
    }
  }
  
  return (
    <div className='container'>
      <PageHeader />

      <div className="main-container">
        <VideoPlaylist sidebarShow={sidebarShow} hideSidebar={hideSidebar}/>
        <VideoMainBody />
      </div>
      
      <VideoControlsBar toggleSidebarVisibility={toggleSidebarVisibility} />
    </div>
  );
}
