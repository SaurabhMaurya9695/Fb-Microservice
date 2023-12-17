import React from 'react'
import Navbar from "../Component/Navbar"
import { Row , Col } from 'react-bootstrap'
import LeftSideBar from '../Component/LeftSideBar'
import MiddleBar from '../Component/MiddleBar'
import Friends from '../Component/RightSide/friends'
import { getAllPost } from '../Service/post.service'
const Home = () => {

  const [post , setPost] = useState(null);

  useEffect(()=>{
    getPosts();
  },[]);

  const getPosts = () =>{
    getAllPost().then((data)=>{
      console.log(data);
      setPost(data);
    }).catch((error)=>{
      console.log(error);
    })
  }

 

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