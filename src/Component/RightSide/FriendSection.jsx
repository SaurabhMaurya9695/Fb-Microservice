import { Avatar, Button } from "@mui/material";
import './sponser.css'
import { useState } from "react";

const FriendSection = ({val}) =>{
    const [showSuccess , setShowSuccess] = useState(false);
    const [showMsg , setShowMsg] = useState(val.status);
    
    const showSuccessMesage = (msg) =>{
        setShowSuccess(true);
        setShowMsg(msg);
    }

    const showMessage = () =>{
        return (
            <div className="request_rejected" style={showMsg === "accepted" ? {
                color:"green"
            } : {
                color:"red"
            }}>
                Friend request {showMsg}
            </div>
        )
    }

    return !showSuccess ?  (<>
        <div>
            {/* three sections photo ,name and buttons */}
            {val.Status === "SEND" &&
                <div className="friends_conatiner">
                <div className="friends_left">
                    <div className="friends_img">
                        <Avatar src="" alt="noImage.jpeg"/>
                    </div>
                    <div className="friends_name">
                        {val.sendername}
                    </div>
                    { val.Status === "SEND" && <div className="friends_right">
                        <Button sx={{backgroundColor:"none" , fontWeight:600}} onClick={(event)=> showSuccessMesage("accepted")}>Accept</Button>
                        <Button sx={{backgroundColor:"none" , fontWeight:600}} onClick={(event)=> showSuccessMesage("rejected")} className="ms-3">Reject</Button>
                    </div>}
                </div>
            </div>}
        </div>
     </>) : showMessage() ;
}

export default FriendSection;