import { Avatar, Button, Divider, IconButton, ListItem, Paper, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import "../UploadSection/upload.css"

const Posts = () => {
  
  const { palette } = useTheme();
  const [changeLike,setChangeLike] = useState(false)
  const [changeComment,setChangeComment] = useState(false)
  const [changeShare,setChangeShare] = useState(false)
  const [cnt , setCnt] = useState(0);
  const [commentBox , setCommentBox] = useState(false);
  const [commentlist , setCommentList] = useState();

  const list = [];
  const changeColorForLike = ()=>{
    setChangeLike(!changeLike);
    if(!changeLike ){
      setCnt(cnt + 1);
    }
    else{
      setCnt(cnt - 1);
    }

  }
  const changeColorForComment = ()=>{
    setChangeComment(!changeComment);
    setCommentBox(true);
    
  }


  const changeColorFoShare = ()=>{
    setChangeShare(!changeShare);
    
  }

  const saveComment = () =>{
    console.log(commentlist)
  }

  const showCommentBox = () =>{
    return (<>
    {JSON.stringify(commentlist)}
      <div>
      <Paper className='upload_container'>
        <div className='upload_top'>
          <div>
            <Avatar className='upload_image' src='https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/387684188_3540021242932260_4946501197515680151_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=dXZlwmmT--gAX_tKz5D&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBTI1XJZ1izSU2wXLNuQRSOuo8AM-ltFUDb6TJWqzS4iA&oe=657822CF'/>
          </div>
          <div>
            <input className='upload_text' type='text' placeholder="what's on your mind ?" 
            onChange={event => setCommentList(event.target.value)}/>
            <Button onClick={(event) => saveComment()}>Save Comment</Button>
          </div>
        </div>
      </Paper>
    </div>
    </>)
  }

  return (
    <div>
      <Paper className='posts_container mt-3 '>
        {/* diving into six parts */}
        {/* header */}
        <div className='post_header'>
            <div className='post_header_inner_div mt-3 ms-2' >
              <div className='post_header_image'>
                  <Avatar className='post_img' src='https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/387684188_3540021242932260_4946501197515680151_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=dXZlwmmT--gAX_tKz5D&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBTI1XJZ1izSU2wXLNuQRSOuo8AM-ltFUDb6TJWqzS4iA&oe=657822CF'/>
              </div>
              <div className='post_header_text ms-2'>
              <Typography
                sx={{
                  fontWeight:"600",
                  marginLeft:"2px",
                  fontSize:"1.5rem",
                  "&:hover": {
                    cursor: "pointer",
                    color: palette.primary.dark,
                  },
                }}
            >
              Saurabh Maurya
              </Typography>
              </div>
            </div>
            <div className='add_me mt-2'>
              <AddIcon fontSize="large" sx={{ color: pink[500] ,
               "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.dark,
                },}}/>
            </div>
        </div>

        {/* discription */}
        <div className='post_discription'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora eos praesentium. Est reprehenderit nisi molestiae, veritatis voluptatibus error odio tempora consequatur! Nemo, id quo molestiae et tempora sequi repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit repellat cum autem at, explicabo in dignissimos maiores asperiores quisquam, unde repudiandae aperiam a esse. Voluptatum facilis totam veniam iure consectetur.</p>
        </div>

        {/* Image Section */}
        <div className='post_image'>
          <img alt='NOImage' src="https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/409334003_864906305298447_2367497083654687882_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c42490&_nc_ohc=jiFCOYJFqHAAX9VWSaD&_nc_ht=scontent.flko9-1.fna&oh=00_AfDJ4kRVfqKs-4u96tbfxAC1OaccaSDONCT097t715Pygw&oe=6579D950" width="600px"></img>
        </div>

        {/* Like count  */}
        <div className='post_like_count'>
          liked by {cnt}
        </div>
        <Divider sx={{color:"white"}} />
        {/* comment - like and share section */}
        <div className='post_footer'>
          <div className='post_likes'>
          <IconButton aria-label="delete" onClick={(event)=> changeColorForLike()} >
            <FavoriteIcon sx={changeLike && { color:'cyan'}}/> <span className='ms-2'> Like</span>
          </IconButton>
          </div>
          <div className='post_comments'>
          <IconButton aria-label="delete" onClick={(event)=> changeColorForComment()}  >
            <CommentIcon sx={changeComment && { color:'cyan'}} /> <span className='ms-2'> Comment</span>
          </IconButton>
          </div>
          <div className='post_share'>
          <IconButton aria-label="delete" onClick={(event)=> changeColorFoShare()} >
            <ShareIcon sx={changeShare && { color:'cyan'}} /> <span className='ms-2'> Share</span>
          </IconButton>
          </div>
        </div>
        {JSON.stringify(list)}   
        {commentBox && showCommentBox()}



      </Paper>
    </div>
  )
}

export default Posts
