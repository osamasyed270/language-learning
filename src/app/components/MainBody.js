import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import videoInfo from "../transcript01.json";

const TranscriptionEditor = () => {
  const [editorContent, setEditorContent] = useState([]);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

//   const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoTranscript, setVideoTranscript] = useState([]);

  useEffect(() => {
    setVideoTranscript(videoInfo.words);
    
  }, []);

  console.log(videoInfo.words[2][6].w);
  

  useEffect(() => {
    if (videoTranscript) {
      const initialContent = videoTranscript.map(phrase => ({
        type: 'paragraph',
        children: phrase.map(word => ({
          text: word.w,
        //   bold: word.meta?.fontWeight === 'bold',
        //   italic: word.meta?.fontStyle === 'italic',
        //   underline: word.meta?.textDecoration === 'underline',
        })),
      }));
      setEditorContent(initialContent);
    }
  }, [videoTranscript]); 

//   let player = useRef(null);

//   useEffect(() => {
//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       player.current = new window.YT.Player('video-player', {
//         videoId: videoInfo.videoLesson.videoId,
//         events: {
//           onReady: onPlayerReady,
//         }
//       });
//     };
//   }, []);

//   const onPlayerReady = (event) => {
//     setInterval(() => {
//       setVideoCurrentTime(event.target.getCurrentTime());
//     }, 100);
//   };

  return (
    <div className='video-main-body'>
      <div className="video-main-body-inner">
        {/* <div className='player-container'>
          <div id="video-player"></div>
        </div> */}
        <div className='video-transcript-container'>
          <div className="video-transcript-inner">
            {editorContent.length > 0 ? (
              <Slate editor={editor} initialValue={editorContent} value={editorContent} onChange={() => {}}>
                <Editable
                    style={{

                        whiteSpace: 'normal',
                        // overflowWrap: 'break-all',
                        outline: 'none',
                        lineHeight: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                  renderLeaf={({ attributes, children, leaf }) => (
                    <span
                      {...attributes}
                    //   style={{
                    //     fontWeight: leaf.bold ? 'bold' : 'normal',
                    //     fontStyle: leaf.italic ? 'italic' : 'normal',
                    //     textDecoration: leaf.underline ? 'underline' : 'none',
                    //     letterSpacing: '1px',
                    //   }}
                    >
                      {children}&nbsp;
                    </span>
                  )}
                />
              </Slate>
            ) : (
              <p style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading transcription...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptionEditor;
