import React from 'react'
import Image from 'next/image'
import closeIcon from '../assets/icons/close.png'
import playIcon from '../assets/icons/play.png'

function VideoPlaylist({ sidebarShow, hideSidebar }) {
  return (
    <div className={sidebarShow ? 'video-playlist playlist-sidebar-show':'video-playlist'}>
        <div className='playlist-header'>
          <div className='playlist-header-left'>
            <h3 className='playlist-title'>Playlist</h3>
            <p className='playlist-total-files'>20 files</p>
          </div>
          <div className='playlist-header-right'>
            <button className='playlist-close-btn' onClick={hideSidebar}>
              <Image src={closeIcon} />
            </button>
          </div>
        </div>
        <div className='playlist-all-items'>
          <a className="playlist-item" href='#'>
            <Image src={playIcon} className='playlist-item-icon' />
            <p className="playlist-item-number">1</p>
            <p className="playlist-item-title">Lorem ipsum dolor sit amet.</p>
            <p className="playlist-item-time">01:10:16</p>
          </a>
        </div>
        <div className='playlist-all-items'>
          <a className="playlist-item" href='#'>
            <Image src={playIcon} className='playlist-item-icon' />
            <p className="playlist-item-number">1</p>
            <p className="playlist-item-title">Lorem ipsum dolor sit amet.</p>
            <p className="playlist-item-time">01:10:16</p>
          </a>
        </div>
        <div className='playlist-all-items'>
          <a className="playlist-item" href='#'>
            <Image src={playIcon} className='playlist-item-icon' />
            <p className="playlist-item-number">1</p>
            <p className="playlist-item-title">Lorem ipsum dolor sit amet.</p>
            <p className="playlist-item-time">01:10:16</p>
          </a>
        </div>
        <div className='playlist-all-items'>
          <a className="playlist-item" href='#'>
            <Image src={playIcon} className='playlist-item-icon' />
            <p className="playlist-item-number">1</p>
            <p className="playlist-item-title">Lorem ipsum dolor sit amet.</p>
            <p className="playlist-item-time">01:10:16</p>
          </a>
        </div>
        <div className='playlist-all-items'>
          <a className="playlist-item" href='#'>
            <Image src={playIcon} className='playlist-item-icon' />
            <p className="playlist-item-number">1</p>
            <p className="playlist-item-title">Lorem ipsum dolor sit amet.</p>
            <p className="playlist-item-time">01:10:16</p>
          </a>
        </div>
    </div>
  )
}

export default VideoPlaylist