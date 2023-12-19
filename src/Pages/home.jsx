import React from 'react'
import Navbar from "../Component/Navbar"
import { Row , Col } from 'react-bootstrap'
import LeftSideBar from '../Component/LeftSideBar'
import MiddleBar from '../Component/MiddleBar'
import Friends from '../Component/RightSide/friends'
import { getAllPost } from '../Service/post.service'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPosts } from '../redux/state'
const Home = () => {

  const dispatch = useDispatch();

  useEffect(()=>{

    const getPosts = () =>{
      getAllPost().then((data)=>{
        console.log(data);
        dispatch(
          setPosts({
            post : data
          })
        )
      }).catch((error)=>{
        console.log(error);
      })
    }

    getPosts();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  

 

  return (
    <div>
      <Navbar/>
      <div className="container-fluid" >
        <Row>
          <Col md={3} >
            {<LeftSideBar/>}
          </Col>
          <Col md={6} className='middleContainer'>
            <h1>{<MiddleBar/>}</h1>
          </Col>
          <Col md={3}>
            <h1><Friends/></h1>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home