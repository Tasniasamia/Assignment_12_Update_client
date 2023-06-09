import React from 'react';
import './Card.css'
const Card = ({indexdata}) => {
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={indexdata.
Class_image} alt="Shoes"style={{height:"250px",width:"100%"}} className='object-cover'/></figure>
        <div className="card-body">
        
        <div style={{color:"#4d4d4d"}}className='text-2xl font-bold'>{indexdata.course_name}</div>
           <div style={{color:"#4d4d4d"}}>{indexdata.
Class_name}</div>
        
          <p>Do you want to train with us, Please join with us and Let s have some fun and interest</p>
          
       
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Available Seats :</span>{indexdata.
Available_seats}</div>
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Price :</span>${indexdata.
Price}</div>
        </div>
      </div>
    );
};

export default Card;