import React, { useState, useEffect, useRef } from 'react';
import videoInfo from "../videoTranscriptInfo.json";

function VideoMainBody({ videos }) {
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [transcriptPhrases, setTranscriptPhrases] = useState([]);
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    setTranscriptPhrases(videoInfo.videoLesson.transcription[0].phrases);
  }, []);

  let player = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player('video-player', {
        videoId: videoInfo.videoLesson.videoId,
        events: {
          onReady: onPlayerReady,
        }
      });
    };
  }, []);

  const onPlayerReady = (event) => {
    setInterval(() => {
      setVideoCurrentTime(event.target.getCurrentTime());
    }, 100);
  };

  const handleTextSelect = () => {
    const selection = window.getSelection().toString().trim();

    const foundInTranscript = transcriptPhrases.some(phrase => 
      phrase.words.some(item => item.word === selection)
    );

    if (foundInTranscript) {
      setSelectedText(selection);
    } else {
      setSelectedText(''); 
    }
  };

  const handleSplit = (direction) => {

    const updatedPhrases = [];

    transcriptPhrases.forEach(phrase => {
      const words = phrase.words;
      const selectedIndex = words.findIndex(item => item.word === selectedText);

      if (selectedIndex !== -1) {

        let before, after;

        if (direction === 'forward') {
          before = words.slice(0, selectedIndex + 1); 
          after = words.slice(selectedIndex + 1);     
        } else if (direction === 'backward') {
          before = words.slice(0, selectedIndex);
          after = words.slice(selectedIndex);          
        }

        const newSentence1 = { ...phrase, words: before }; 
        const newSentence2 = { ...phrase, words: after };  

        updatedPhrases.push(newSentence1);
        updatedPhrases.push(newSentence2);
      } else {
        updatedPhrases.push(phrase);
      }
    });

    setTranscriptPhrases(updatedPhrases);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSplit('forward');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedText]);

  return (
    <div className='video-main-body' onMouseUp={handleTextSelect}>
      
      <div className="video-main-body-inner">
        <div className='player-container'>
          <div id="video-player"></div>
          <div className="video-editing-bar">
            <button onClick={() => handleSplit('backward')} className='split-btn'>Backward Split</button>
            <button onClick={() => handleSplit('forward')} className='split-btn'>Forward Split</button>
          </div>
        </div>
        <div className='video-transcript-container'>
          <div className="video-transcript-inner">
            {transcriptPhrases.map((phrase, phraseIndex) => {
              return (
                <div className='sentence' key={phraseIndex}>
                  {phrase.words.map((item, itemIndex) => {
                    return (
                      <span key={itemIndex}>
                        <div className={item.startTime && item.endTime && videoCurrentTime >= item.startTime && videoCurrentTime <= item.endTime ? "word active" : "word"}>{item.word}</div>
                        <div> </div>
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default VideoMainBody;
