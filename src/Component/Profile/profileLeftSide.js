import { Avatar, Divider, Paper, Typography } from '@mui/material';
import React from 'react'
import './profileLeftSide.css';
import { useSelector } from 'react-redux';
import { USER_BASE_URL } from '../../Service/helper.service';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ProfileLeftSide = () => {

  const user = useSelector((state)=>state.user);
  return (
    <div >
      <Paper className='profileCard_container'>
        {/* first upper section is user's Photo */}
        <div className='profileCard_header'>
            <div className='profileCard_header_image'>
              <Avatar src={USER_BASE_URL+"/users/image/"+user.userId} alt='NoImage'/>
            </div>
            <div className='profileCard_header_text' >
              <Typography sx={{
                fontSize:'1rem',
                fontWeight:'600'
              }}>{user.username}</Typography>
            </div>
        </div>
        <Divider sx={{color:"white"}} />
        <div className='profileCard_body'>
            <div className="profileCard_body_con">
              <div className="sponcard_icon">
                  <LocationOnIcon/>
              </div>
              <div className="sponcard_icon_text">
                  Lucknow Up
              </div>
            </div>
            <div className='profileCard_body_con'>
              <div className="sponcard_icon">
                  <WorkOutlineIcon/>
              </div>
              <div className="sponcard_icon_text">
                  Infosys
              </div>
            </div>
            <div className='profileCard_body_con'>
              <div className="sponcard_icon">
                  <PhoneIcon/>
              </div>
              <div className="sponcard_icon_text">
                  123477979
              </div>
            </div>
        </div>
        <Divider sx={{color:"white"}} />
        <div className="profileCard_footer_con">
          <div className="profileCard_footer">
            <div className="profileCard_footer_text">
              who view'd your profile : 
            </div>
            <div className="profileCard_footer_Value">
              1244
            </div>
          </div>
          <div className="profileCard_footer">
            <div className="profileCard_footer_text ms-1">
              Impression On your post
            </div>
            <div className="profileCard_footer_Value">
              652875
            </div>
          </div>
        </div>
        <Divider sx={{color:"white"}} />
        <div className="social_profiles_container">
          <h6 className="social_profiles_text ms-3 mt-3">Social Profiles</h6>
          <div className="social_profiles">
            <div className="social_logo">
              <TwitterIcon/>
            </div>
            <div className="social_logo_text">
              Twitter
            </div>
            <div className="social_link_edit">
              <EditIcon/>
            </div>
          </div>
          <div className="social_profiles">
            <div className="social_logo">
              <LinkedInIcon/>
            </div>
            <div className="social_logo_text">
              Twitter
            </div>
            <div className="social_link_edit">
              <EditIcon/>
            </div>
          </div>
        </div>

      </Paper>
    </div>
  )
}

export default ProfileLeftSide;
