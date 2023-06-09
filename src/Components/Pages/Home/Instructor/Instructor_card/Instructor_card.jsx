import React from 'react';

const Instructor_card = ({indexdata}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={indexdata.image} alt="Shoes"style={{height:"250px",width:"100%"}} className='object-cover'/></figure>
        <div className="card-body">
        
        <div style={{color:"#4d4d4d"}}className='text-2xl font-bold'>{indexdata.name}</div>
           <div style={{color:"#4d4d4d"}} className='text-2xl'>{indexdata.email}</div>
        
          <p>I just try my best to learn something new</p>
          
       
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Number of Classes :</span>{indexdata.number_of_classes}</div>
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Classes:</span>{indexdata.name_of_classes}</div>
        </div>
      </div>
    );
};

export default Instructor_card;
{/* <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick.jpg" class="attachment-full size-full wp-post-image" alt="Ball Kick" decoding="async" title="Ball Kick" srcset="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick.jpg 1170w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-500x342.jpg 500w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-300x205.jpg 300w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-768x525.jpg 768w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-1024x700.jpg 1024w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-772x528.jpg 772w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-590x402.jpg 590w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-570x390.jpg 570w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-448x306.jpg 448w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-439x300.jpg 439w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-420x287.jpg 420w, https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick-441x301.jpg 441w" sizes="(max-width: 1170px) 100vw, 1170px" width="1170" height="800"></img> */}