import './home2';
import Home from './home';
import React from "react";
import {useState, useEffect} from 'react';



function Home2(){
    const [buttonPopup, setButtonPopup] = useState(1);
    <Home trigger={buttonPopup} setTrigger={setButtonPopup}></Home>
    
    return(

        <div className='home2'>
<Home trigger={buttonPopup} setTrigger={setButtonPopup}></Home>
  

         <img src='https://www.yankodesign.com/images/design_news/2023/04/auto-draft/renaissance_architecture_footwear_midjourney_1.jpg.' alt='d' className='d' />
        
        
        
        
        
        
        </div>



    );
    }
    export default Home2;
