import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <div style={{background:"#2d2d2d"}} className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 p-5'>
                <div className='space-y-6'>
                    <div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl "><span style={{color:"white"}}>WH<span style={{color:"skyblue"}}>i</span>STLE</span></Link></div>
                <div className=' text-white'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English.</div>
               <div className='text-white'>Address: Banani,Dhaka </div>
               
               
                <div className='grid grid-cols-4 gap-2'>
               <div style={{background:"#3c3c3c"}}className='text-center p-3 hover:bg-red-300'><i className="fa-brands fa-facebook-f text-white"></i></div> 
               <div style={{background:"#3c3c3c"}}className='text-center p-3'><i className="fa-brands fa-google-plus-g text-white"></i></div> 
               <div style={{background:"#3c3c3c"}}className='text-center p-3'><i className="fa-brands fa-twitter text-white"></i></div> 
               <div style={{background:"#3c3c3c"}}className='text-center p-3'><i className="fa-brands fa-square-youtube text-white"></i></div> 

                </div>
                </div>
                <div className='space-y-6'>
<div className='text-white text-2xl font-bold '>USEFULL LINKS</div>
<div style={{}}className='text-white space-y-2'>
    <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}><i className="fa-solid fa-check me-2 text-xl"></i>Membership Offers</div>
    <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}><i className="fa-solid fa-check me-2 text-xl"></i>Training Schedule</div>
    <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}><i className="fa-solid fa-check me-2 text-xl"></i>Inter Competition</div>
    <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}><i className="fa-solid fa-check me-2 text-xl"></i>Awards and Trophies</div>
   
  

</div>

                </div>
                <div className='space-y-6'>
                <div className='text-white text-2xl font-bold '>LATEST POSTS</div>

<div className='flex'>
<div><img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/basketball-team-70x60.jpg" alt="basket_ball" /></div>
<div className='text-white ms-2'>
    <div className='text-xl'>BASKETBALL TEAM</div>
    <div>11 FEB 2024</div>
</div>
</div>
<div className='flex'>
<div><img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/golf-70x60.jpg" alt="basket_ball" /></div>
<div className='text-white ms-2'>
    <div className='text-xl'>THE SHOT JONE</div>
    <div>11 FEB 2024</div>
</div>
</div>
<div>

</div>

                </div>
                <div className='space-y-6'>
<div className='text-white text-2xl font-bold '>About WHISTLE</div>
<div style={{}}className='text-white space-y-2'>
    <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}className='flex justify-between'><div> Mondat to Friday</div><div>04:00 - 12:00</div>
   </div>
   <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}className='flex justify-between'><div> Saturday</div><div>14:00 - 21:00</div>
   </div>
   <div style={{border:"0",borderBottom:"1px solid #3f3f3f",paddingBottom:"15px"}}className='flex justify-between'><div> Sunday</div><div>Holiday</div>
   </div> 
 
  

</div>

                </div>
            </div>
            
        </div>
        <div style={{background:"whitesmoke"}} className='md:flex justify-between p-5'>
            <div>


Home |  About | Blog |  Gallery |  Shop |  Contact 
            </div>
            <div>
                

  

© 2016 - WHISTLE. Design: Tasnia Sharin

            </div>

        </div>
        </div>
    );
};

export default Footer;