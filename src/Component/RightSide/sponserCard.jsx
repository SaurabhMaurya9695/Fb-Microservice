import { Paper, Typography } from '@mui/material';
import React from 'react'
import './sponser.css'
import { useSelector } from 'react-redux';
import { USER_BASE_URL } from '../../Service/helper.service';

const SponserCard = () => {

  const user = useSelector((state)=>state.user);
  return (
    <div >
      <Paper className='sponserCard_container'>
      {/* header */}
      <div className='sponserCard_header'>
        <Typography sx={{marginTop : "10px" , marginLeft:"4px" ,fontWeight:400}}>Sponsered by</Typography>
        <Typography sx={{marginTop : "10px" , marginRight:"7px"}}>Create Add</Typography>
      </div>
      <div className='sponser_image'>
        <img alt='noimage.jpeg'
         src={USER_BASE_URL+"/users/image/"+user.userId}
         width={250} height={250} className='image_src mt-2' />
      </div>
      <div className='sponser_text mt-3 ms-3'>
        <h6 className='sponser_text_css'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, cum.</h6>
      </div>
      </Paper>
    </div>
  )
}

export default SponserCard;
