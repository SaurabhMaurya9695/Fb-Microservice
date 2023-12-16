import React from 'react'
import "./upload.css";
import { Avatar, Button, Divider, Paper, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


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
        <Divider sx={{color:"white"}} />
        <div className="upload_bottom">
          <div>
            <Button component="label"  startIcon={<CloudUploadIcon />} size='medium'>
              Image
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div>
            <Button component="label"  startIcon={<OndemandVideoIcon />} size='medium'>
              Video
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div >
            <Button  endIcon={<SendIcon />}>
              Upload Post
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default UploadSection

