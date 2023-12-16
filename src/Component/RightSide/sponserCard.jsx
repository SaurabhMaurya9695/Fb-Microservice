import { Paper, Typography } from '@mui/material';
import React from 'react'
import './sponser.css'

const SponserCard = () => {
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
         src='https://scontent.fknu1-6.fna.fbcdn.net/v/t39.30808-6/404652825_3567987516802299_2413690461665923420_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=BupQMJp7QusAX8-9CIV&_nc_ht=scontent.fknu1-6.fna&oh=00_AfC6__sHaznylPIlaY1F3zLUDdTrYRP4aI4cn1tdRamVBQ&oe=657A1305' 
         width={250} height={200} className='image_src' />
      </div>
      <div className='sponser_text mt-3 ms-3'>
        <h6 className='sponser_text_css'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, cum.</h6>
      </div>
      </Paper>
    </div>
  )
}

export default SponserCard;
