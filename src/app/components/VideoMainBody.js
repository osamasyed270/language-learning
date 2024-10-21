import React, { useState, useEffect, useRef } from 'react';
import videoInfo from "../videoTranscriptInfo.json";

function VideoMainBody({ videos }) {
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [transcriptPhrases, setTranscriptPhrases] = useState([]);
  const [selectedRange, setSelectedRange] = useState({ startIndex: -1, endIndex: -1, phraseIndex: -1 });
  const [highlightedWord, setHighlightedWord] = useState({ phraseIndex: -1, wordIndex: -1 });

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

  const handleWordSelect = (phraseIndex, wordIndex, type) => {
    setSelectedRange(prevRange => {
      if (type === 'start') {
        return { ...prevRange, startIndex: wordIndex, phraseIndex };
      } else if (type === 'end') {
        return { ...prevRange, endIndex: wordIndex, phraseIndex };
      }
      return prevRange;
    });

    setHighlightedWord({ phraseIndex, wordIndex });
  };

  const handleSplit = (direction) => {
    const { startIndex, endIndex, phraseIndex } = selectedRange;

    const updatedPhrases = transcriptPhrases.map((phrase, index) => {
      if (index === phraseIndex) {
        const words = phrase.words;

        let before, after;

        if (direction === 'forward') {
          before = words.slice(0, endIndex + 1);  
          after = words.slice(endIndex + 1);      
        } else if (direction === 'backward') {
          before = words.slice(0, startIndex);
          after = words.slice(startIndex);
        }

        const newSentence1 = { ...phrase, words: before }; 
        const newSentence2 = { ...phrase, words: after };  

        return [newSentence1, newSentence2]; 
      }

      return [phrase];
    });

    const flattenedPhrases = updatedPhrases.flat();

    setTranscriptPhrases(flattenedPhrases);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSplit('forward'); 
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedRange]);

  return (
    <div className='video-main-body'>
      
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
                      <span 
                        key={itemIndex}
                        onMouseDown={() => handleWordSelect(phraseIndex, itemIndex, 'start')}
                        onMouseUp={() => handleWordSelect(phraseIndex, itemIndex, 'end')}
                      >
                        <div 
                        className=
                        {`word 
                          ${item.startTime && item.endTime && videoCurrentTime >= item.startTime && videoCurrentTime <= item.endTime ? "active" : ""} 
                          ${highlightedWord.phraseIndex === phraseIndex && highlightedWord.wordIndex === itemIndex ? 'highlight' : ''}
                        `}
                        >{item.word}</div>
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
