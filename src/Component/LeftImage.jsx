import { Avatar } from '@mui/material'
import React from 'react'

const LeftImage = ({url , value}) => {
    // console.log(url)
    // console.log(value)
  return (
    <div className='ImageContainer'>
      {/* there has to be two component */}
      <div >
        <Avatar className='ImageAvatar' src={url} alt='noImage.jpeg'/>
      </div>
      <div className='TextH'>
        {value}
      </div>
    </div>
  )
}

export default LeftImage
