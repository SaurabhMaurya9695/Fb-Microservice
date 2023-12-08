import React, { useEffect, useState } from "react";
import LeftImage from "./LeftImage";

const LeftSideBar = () => {
  const [temp, setTemp] = useState(null);
  const getValues = () => {
    return [
      {
        id: 1,
        url: "https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/387684188_3540021242932260_4946501197515680151_n.jpg?stp=dst-jpg_p148x148&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=dXZlwmmT--gAX_tKz5D&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBTI1XJZ1izSU2wXLNuQRSOuo8AM-ltFUDb6TJWqzS4iA&oe=657822CF",
        text: "Saurabh Maurya",
      },
      {
        id: 2,
        url: "https://scontent.flko9-2.fna.fbcdn.net/v/t39.30808-6/344729482_779860283710482_2312999166119980221_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=nDGZ_2LBgXQAX8zoC8h&_nc_ht=scontent.flko9-2.fna&oh=00_AfC9Kjen2mdyHvIjldfH1bhEzC71m28ry6D8Zz3n-WPuKQ&oe=6579177B",
        text: "Neha Maurya",
      },
      {
        id: 3,
        url: "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-1/406415577_760263822805460_3333848079477590813_n.jpg?stp=c407.136.431.430a_dst-jpg_p720x720&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=jnOLleC_TR4AX-yJGXJ&_nc_ht=scontent.flko9-1.fna&oh=00_AfDQXWfrVhawUrkgILaM-poaZZ1PggJ7VaUiIiuw-nnSrA&oe=6578377E",
        text: "Gemini.Ai",
      },
      {
        id: 4,
        url: "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-1/222173231_2744711915819670_1209616804925560117_n.jpg?stp=dst-jpg_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=RIwy9guDljgAX9Ukh6y&_nc_ht=scontent.flko9-1.fna&oh=00_AfAAaE-g0UQid8oi075RTxI_DkDRoOzurrfICQ-O8fsuXQ&oe=6578CB29",
        text: "BBNews",
      },
      {
        id: 5,
        url: "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-1/274893685_1574719829559835_3636105562471228150_n.jpg?stp=dst-jpg_p480x480&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=UWZdeIum5J8AX8AGoIB&_nc_ht=scontent.flko9-1.fna&oh=00_AfBdlaO5HuEAwQM71hsUfa7FwTIsdjBZ3bHs5v05haDKUw&oe=6577EA7E",
        text: "CricXtasy",
      },
      {
        id: 6,
        url: "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-1/352938128_251644587459761_1690159980507510618_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=0XFsS2D8aCgAX90ggP_&_nc_ht=scontent.flko9-1.fna&oh=00_AfCIfXSZC4gfNj_6q4FaaX8q2Ki6OZZJMPD9tRzMbRiunw&oe=65789712",
        text: "Crickettoday ",
      },
      {
        id: 7,
        url: "https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-1/348324691_569386918634082_6607724683278155914_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=596444&_nc_ohc=o4w7TOXFUF4AX-hSgfm&_nc_ht=scontent.fknu1-5.fna&oh=00_AfAj8mzr1IRROd5a_4555FQsyrQ6Mf6d7Gi-vQSDaIJP4g&oe=6578D8DD",
        text: "Pubg Group",
      },
    ];
  };

  useEffect(()=>{
    setTemp(getValues());
  },[])

  

  return (
    <>
      {
        temp?.map(x =>{
          return <LeftImage url={x.url} value={x.text} key={x.id}/>
        })
      }
    </>
  );
};

export default LeftSideBar;
