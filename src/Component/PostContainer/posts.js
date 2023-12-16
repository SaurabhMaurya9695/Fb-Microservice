import { Avatar, Button, Divider, IconButton, ListItem, Paper, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import "../UploadSection/upload.css"
import DeleteIcon from '@mui/icons-material/Delete';

const Posts = ({p}) => {
  
  const { palette } = useTheme();
  const [changeLike,setChangeLike] = useState(false)
  const [changeComment,setChangeComment] = useState(false)
  const [changeShare,setChangeShare] = useState(false)
  const [cnt , setCnt] = useState(p.like);
  const [commentBox , setCommentBox] = useState(false);
  const [commentlist , setCommentList] = useState({
    value : ''
  })

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
    list.push(commentlist)
    console.log(list.length);
    console.log(list)
  }

  

  const showCommentBox = () =>{
    return (<>
      <div>
      <Paper className='post_comment_container'>
        <div className='upload_top'>
          <div>
            <Avatar className='upload_image' src='https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/387684188_3540021242932260_4946501197515680151_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=dXZlwmmT--gAX_tKz5D&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBTI1XJZ1izSU2wXLNuQRSOuo8AM-ltFUDb6TJWqzS4iA&oe=657822CF'/>
          </div>
          <div>
            <input className='upload_text' type='text' placeholder="Write Your Comment ?" 
            onChange={event => setCommentList(event.target.value)}
            value={commentlist.value}
            name={commentlist.value} />
            <Button onClick={(event) => saveComment()}>Save Comment</Button>
          </div>
        </div>
      </Paper>
    </div>
    </>)
  }

  const showCommentList = ()=>{
    return (<>
      {
        list.map(x =>{
          return <ListItem > {x.value}</ListItem>
        })
      }
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
              {p.name}
              </Typography>
              </div>
            </div>
            <div className='add_me mt-2 '>
              <PersonAddIcon fontSize="large" sx={{ color: pink[500] ,
               "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.dark,
                },}}/>
                <Button  className='ms-4' startIcon={<DeleteIcon />} size='large'>
                  Delete Post
                </Button>
            </div>
        </div>

        {/* discription */}
        <div className='post_discription'>
          <p>{p.post_discription}</p>
        </div>

        {/* Image Section */}
        {p.post_url && <div className='post_image'>
          <img alt='NOImage' src={p.post_url} width="600px"></img>
        </div>}

        {/* Like count  */}
        {cnt > 0 && <div className='post_like_count'>
          liked by {cnt}
        </div>}
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
        <Divider sx={{color:"white"}} />
        {commentBox && showCommentBox()}
        {list && showCommentList()}



      </Paper>
    </div>
  )
}

export default Posts
