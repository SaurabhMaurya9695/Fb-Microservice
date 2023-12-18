import React, { useState } from 'react'
import "./upload.css";
import { Avatar, Button, Divider, Paper, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useSelector } from 'react-redux';
import { createPost } from '../../Service/post.service';
import { USER_BASE_URL } from '../../Service/helper.service';

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

  const [post , setPost] = useState({
    userId:"",
    image :"",
    description:"",
  });

  const user = useSelector((state) => state.user);

  const sendPost = (event) =>{
    event.preventDefault();
    post.userId = user.userId;
    console.log(post);
    createPost(post).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div>
      <Paper className='upload_container'>
        <div className='upload_top'>
          <div>
            <Avatar className='upload_image' src={USER_BASE_URL + "/users/image/" + user.userId}/>
          </div>
          <div>
            <input className='upload_text' type='text' placeholder="what's on your mind ?"
            onChange={(event) => {
              setPost({
                ...post,
                description: event.target.value
              })
            }}/>
          </div>
        </div>
        <Divider sx={{color:"white"}} />
        <div className="upload_bottom">
          <div>
            <Button component="label"  startIcon={<CloudUploadIcon />} size='medium'
            onChange={(event) => {
              setPost({
                ...post,
                image: event.target.value
              })
            }} >
              Image
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div>
            <Button component="label"  startIcon={<OndemandVideoIcon />} size='medium'
            onChange={(event) => {
              setPost({
                ...post,
                image: event.target.value
              })
            }} >
              Video
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div >
            <Button  endIcon={<SendIcon />} onClick={sendPost}>
              Upload Post
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default UploadSection

