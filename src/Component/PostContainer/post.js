import React, { useEffect } from 'react'
import "./post.css"
import Posts from './posts'
import { useSelector } from 'react-redux'
const Post = () => {

  // const [posts , setPost] = useState(undefined)
  const post = useSelector((state) => state.all_posts);

  useEffect(()=>{
    (getPost());
  },[]); // eslint-disable-line


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
