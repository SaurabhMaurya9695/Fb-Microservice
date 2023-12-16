import React, { useEffect, useState } from 'react'
import SponserCard from './sponserCard'
import { Divider, Typography } from '@mui/material'
import FriendSection from './FriendSection'

const Friends = () => {

  const [friends , setFriends] = useState([]);
  const getFriends = () =>{
    return ([
      {
        friendId :"1",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Yash Maurya",
      },
      {
        friendId :"2",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "ACCEPTED",
        sendername : "Vikas Maurya",
      },
      {
        friendId :"3",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Vikas Jaiswal",
      },
      {
        friendId :"4",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "bhupriti Sidar",
      },
      {
        friendId :"5",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Kusum Sidar",
      },
      {
        friendId :"6",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Pinki Maurya",
      },
      {
        friendId :"7",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Manish Gupta",
      },
      {
        friendId :"8",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Priyanka Sidar",
      },
      {
        friendId :"9",
        senderFromId : "123" ,
        senderToId : "123" ,
        Status : "SEND",
        sendername : "Dhairu Sidar",
      }
    ])
  }

  useEffect(() =>{
    setFriends(getFriends());
  } , []);
  return (
    <div>
      <SponserCard/>
      <Divider className='mt-3' sx={{color:"#f8f9fa" }} />
      <Typography sx={{
        color:"black",
        fontWeight:600,
        fontSize:"20px",
        textAlign:"center",
      }}>Contacts list</Typography>
      <Divider className='mt-3' sx={{color:"#f8f9fa" }} />
      <div className="friends_container">
        {
          friends?.map(x =>{
            return <FriendSection key={x.friendId} val = {x}/>
          })
        }
      </div>
    </div>
  )
}

export default Friends
