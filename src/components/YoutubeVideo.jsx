import React from 'react'
import YouTube from 'react-youtube';

export default function YoutubeVideo(props) {
 // YouTube video options
 const opts = {
    height: '500',
    width: '888',
    playerVars: {
      // YouTube video parameters (optional)
      autoplay: 0,
    },
  };

  // YouTube video onReady event
  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className="w-full flex justify-center">
      <YouTube videoId="rUMqcJ2FW0c" opts={opts} />
    </div>
  );
}
