import React from 'react'
import Navbar from '../Navbar';
import { Col, Row } from 'react-bootstrap';
import ProfileLeftSide from './profileLeftSide';

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <Row>
                <Col md={4} style={{
                    border:'2px solid red '
                }}>
                    <ProfileLeftSide/>
                </Col>
                <Col  style={{
                    border:'2px solid red '
                }}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odio esse, tempore id minus mollitia harum officia eveniet velit explicabo. Unde reprehenderit officia distinctio eum commodi eligendi id sit eveniet!</p>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Profile;
