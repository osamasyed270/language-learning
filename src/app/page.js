"use client"

import React, {useState, useEffect} from 'react';
import PageHeader from "./components/PageHeader";
import VideoPlaylist from "./components/VideoPlaylist";
// import VideoMainBody from "./components/VideoMainBody";
import MainBody from "./components/MainBody";
import VideoControlsBar from "./components/VideoControlsBar";

export default function Home() {

  const [sidebarShow, setSidebarShow] = useState(true)

  const toggleSidebarVisibility = () => {
    setSidebarShow(!sidebarShow);
  }

  const hideSidebar = () => {
    setSidebarShow(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setSidebarShow(false);
    }
  }, []);

  return (
    <div className='container'>
      <PageHeader />

      <div className="main-container">
        <VideoPlaylist sidebarShow={sidebarShow} hideSidebar={hideSidebar}/>
        {/* <VideoMainBody /> */}
        <MainBody />
      </div>
      
      <VideoControlsBar toggleSidebarVisibility={toggleSidebarVisibility} />
    </div>
  );
}
