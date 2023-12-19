import React, { useEffect, useState } from 'react'
import "./post.css"
import Posts from './posts'
import { useSelector } from 'react-redux'
import state from '../../redux/state'
const Post = () => {

  // const [posts , setPost] = useState(undefined)
  const post = useSelector((state) => state.all_posts);

  useEffect(()=>{
    (getPost());
  },[]);


  const getPost = () =>{
    return post;
  }

  return (
    <div>
      {/* <Posts /> */}
      {
        post?.post?.map(x =>{
          return <Posts p = {x} key={x.post_id}/>
        })
      }
    </div>
  )
}

export default Post
