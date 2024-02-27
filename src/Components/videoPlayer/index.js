import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner } from './styles/VideoPlayer.style';

const VideoPlayerContext = createContext();

function VideoPlayer({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <VideoPlayerContext.Provider value={{ showPlayer, setShowPlayer }} {...restProps}>
      <Container>{children}</Container>
    </VideoPlayerContext.Provider>
  );
}

VideoPlayer.Button = function VideoPlayerButton({ children, ...restProps }) {
  const { setShowPlayer } = useContext(VideoPlayerContext);
  return (
    <Button {...restProps} onClick={() => setShowPlayer((prev) => !prev)}>
      {children}
    </Button>
  );
};

VideoPlayer.Video = function VideoPlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(VideoPlayerContext);

  return showPlayer === true
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="newtflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

export default VideoPlayer;
