import React from 'react'
import "./upload.css";
import { Avatar, Paper } from '@mui/material';
const UploadSection = () => {
  return (
    <div>
      <Paper className='upload_container'>
        <div className='upload_top'>
          <div>
            <Avatar className='upload_image' src='https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/387684188_3540021242932260_4946501197515680151_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=dXZlwmmT--gAX_tKz5D&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBTI1XJZ1izSU2wXLNuQRSOuo8AM-ltFUDb6TJWqzS4iA&oe=657822CF'/>
          </div>
          <div>
            <input className='upload_text' type='text' placeholder="what's on your mind ?"/>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default UploadSection

