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