import React from 'react';
import useClass from '../../../../Hooks/useClass';
import Course_card from './Course_card/Course_card';

const Course_Classes = () => {
    const [classes]=useClass();
    return (
        <div className='my-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
        
            classes.map(index=><Course_card key={index._id} indexdata={index}></Course_card >)
        }
        </div>  </div>
    );
};

export default Course_Classes;
