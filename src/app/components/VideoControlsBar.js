import React from 'react'

function VideoControlsBar({ toggleSidebarVisibility }) {

  const mutedIcon = <svg viewBox="-4 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>volume-off</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-161.000000, -573.000000)" fill="#929090"> <path d="M161,581 L161,589 C161,590.104 161.896,591 163,591 L166,591 L166,579 L163,579 C161.896,579 161,579.896 161,581 L161,581 Z M175,573 L168,577.667 L168,592.333 L175,597 C176.104,597 177,596.104 177,595 L177,575 C177,573.896 176.104,573 175,573 L175,573 Z" id="volume-off"> </path> </g> </g> </g></svg>
  const fullVolumeIcon = <svg viewBox="0 -1.5 31 31" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>volume-full</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-258.000000, -571.000000)" fill="#929090"> <path d="M277,571.015 L277,573.068 C282.872,574.199 287,578.988 287,585 C287,590.978 283,595.609 277,596.932 L277,598.986 C283.776,597.994 289,592.143 289,585 C289,577.857 283.776,572.006 277,571.015 L277,571.015 Z M272,573 L265,577.667 L265,592.333 L272,597 C273.104,597 274,596.104 274,595 L274,575 C274,573.896 273.104,573 272,573 L272,573 Z M283,585 C283,581.477 280.388,578.59 277,578.101 L277,580.101 C279.282,580.564 281,582.581 281,585 C281,587.419 279.282,589.436 277,589.899 L277,591.899 C280.388,591.41 283,588.523 283,585 L283,585 Z M258,581 L258,589 C258,590.104 258.896,591 260,591 L263,591 L263,579 L260,579 C258.896,579 258,579.896 258,581 L258,581 Z" id="volume-full"> </path> </g> </g> </g></svg>
  const playlistIcon = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 14L3 14" stroke="#2c62bb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 18H3" stroke="#2c62bb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18.875 14.1183C20.5288 15.0732 21.3558 15.5506 21.4772 16.2394C21.5076 16.4118 21.5076 16.5881 21.4772 16.7604C21.3558 17.4492 20.5288 17.9266 18.875 18.8815C17.2212 19.8363 16.3942 20.3137 15.737 20.0745C15.5725 20.0147 15.4199 19.9265 15.2858 19.814C14.75 19.3644 14.75 18.4096 14.75 16.4999C14.75 14.5902 14.75 13.6354 15.2858 13.1858C15.4199 13.0733 15.5725 12.9852 15.737 12.9253C16.3942 12.6861 17.2212 13.1635 18.875 14.1183Z" stroke="#2c62bb" stroke-width="1.5"></path> <path d="M3 6L13.5 6M20 6L17.75 6" stroke="#2c62bb" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 10L9.5 10M3 10H5.25" stroke="#2c62bb" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
  const backwardIcon = <svg fill="#929090" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>backward</title> <path d="M0 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664zM16 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664z"></path> </g></svg>
  const forwardIcon = <svg fill="#929090" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>forward</title> <path d="M0 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16zM16 24q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12-8q0.896-0.608 0.896-1.696t-0.896-1.632l-12-8q-0.448-0.32-0.992-0.352t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16z"></path> </g></svg>
  const playIcon = <svg viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#1003]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"> </path> </g> </g> </g> </g></svg>

  return (
    <div className='video-controls-bar'>
      <div className="progress-controls">
        <div className="progress">
          <div className="watched-bar"></div>
          <div className="playhead"></div>
        </div>
      </div>
      <div className="controls">
        <div className="controls-left">
          <div className="playlist-btn" onClick={toggleSidebarVisibility}>{playlistIcon}</div>
        </div>
        <div className="controls-center">
          <div className="volume-control">
            <div className="muted-icon">{mutedIcon}</div>
            <input type="range" name="" id="volume-range" />
            <div className="full-volume-icon">{fullVolumeIcon}</div>
          </div>
          <div className="video-playback-container">
            <div className="video-backward-btn">{backwardIcon}</div>
            <div className="video-play-pause-btn">{playIcon}</div>
            <div className="video-forward-btn">{forwardIcon}</div>
          </div>
          <div className="video-time">
            <div className="video-current-time">00:20:24</div>
            <span>&nbsp;/&nbsp;</span>
            <div className="video-duration">01:30:20</div>
          </div>
        </div>
        <div className="controls-right">
          <div className="video-speed-control-container">
            <span>Frames Speed</span>
            <div className="video-speed-control-inner">
              <div className="minus-btn">-</div>
              <div className="video-speed-value">1.0</div>
              <div className="plus-btn">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoControlsBar