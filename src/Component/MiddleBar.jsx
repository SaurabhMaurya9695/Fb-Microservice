import React from 'react'
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import Post from "./PostContainer/post"

const MiddleBar = () => {
  return (
    <>
    <div>
      <StatusBar/>
      <UploadSection/>
      <Post/>
    </div>
    </>
  )
}

export default MiddleBar
