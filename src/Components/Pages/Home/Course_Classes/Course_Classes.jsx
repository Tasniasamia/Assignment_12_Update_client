import React from 'react';
import useClass from '../../../../Hooks/useClass';
import Course_card from './Course_card/Course_card';
import { Helmet } from 'react-helmet';

const Course_Classes = () => {
    const [classes]=useClass();
    return (
        <div className='my-20'>
            <Helmet>
        <title>Whistle | Course_Classses</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
        
            classes.map(index=><Course_card key={index._id} indexdata={index}></Course_card >)
        }
        </div>  </div>
    );
};

export default Course_Classes;
