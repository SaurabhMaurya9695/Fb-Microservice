import React, { useEffect, useState } from 'react'
import "./post.css"
import Posts from './posts'
const Post = () => {

  const [posts , setPost] = useState(undefined)

  useEffect(()=>{
    setPost(getPost());
  },[]);


  const getPost = () =>{
    return [
      {
        post_id: 1,
        name : "Saurabh Maurya",
        post_url : "https://scontent.fknu1-6.fna.fbcdn.net/v/t39.30808-6/404652825_3567987516802299_2413690461665923420_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=BupQMJp7QusAX8-9CIV&_nc_ht=scontent.fknu1-6.fna&oh=00_AfC6__sHaznylPIlaY1F3zLUDdTrYRP4aI4cn1tdRamVBQ&oe=657A1305",
        post_discription:"This is post 1",
        like : 9 ,
        comments : [
          {
            commentId : 1,
            commentedBy : "123",
            commenttext : "This is a testing"
          }
        ]
      },
      {
        post_id: 2,
        name : "Yash Maurya",
        post_url : "https://scontent.fknu1-2.fna.fbcdn.net/v/t39.30808-6/403054047_3566495836951467_4968597891650749409_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ge0KKzGU0_8AX8Sw4cJ&_nc_ht=scontent.fknu1-2.fna&oh=00_AfA5HmGYufFfeaAu_WVQnpcEM7YhHzgZO34gF9SNgxnz1g&oe=657AB531",
        post_discription:"This is post 2",
        like : 4 ,
        comments : [
          {
            commentId : 2,
            commentedBy : "1234",
            commenttext : "This is a testing 2"
          }
        ]
      },
      {
        post_id: 3,
        name : "Pranjal Tripathi",
        post_url : "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/391757209_2094519010900363_1953834688759330434_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sCPcsbrSZtUAX94c_2h&_nc_ht=scontent.flko9-1.fna&oh=00_AfDWWobkcCf_dFxuspObBRs9cpXMd2o8MNfTuv2ajHxUiA&oe=657AE11F",
        post_discription:"This is post 3",
        like : 1 ,
        comments : [
          {
            commentId : 1,
            commentedBy : "1236",
            commenttext : "This is a testing 3"
          }
        ]
      },
      {
        post_id: 4,
        name : "Saurabh Maurya 1",
        post_url : "https://scontent.fknu1-4.fna.fbcdn.net/v/t39.30808-6/408549094_1775639029616650_2856200736722972040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CQQuidhNBtYAX-k2LtA&_nc_ht=scontent.fknu1-4.fna&oh=00_AfDdA9LL7G77eYfmJmxifSQ_8kEwjJHHjirs1x5uP4yRlw&oe=6582F8C2",
        post_discription:"This is post 4",
        like : 900 ,
        comments : [
          {
            commentId : 1,
            commentedBy : "123",
            commenttext : "This is a testing"
          }
        ]
      }
    ];
  }

  return (
    <div>
      {/* <Posts /> */}
      {
        posts?.map(x =>{
          return <Posts p = {x} key={x.post_id}/>
        })
      }
    </div>
  )
}

export default Post
