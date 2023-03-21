import React from 'react'
import 'react-html5video/dist/styles.css'

const VideoPlayer = () => {
  return (
    <video autoplay loop controls>
        <source src='./video/video.mp4' type='video/webm'/>
    </video>
  )
}

export default VideoPlayer