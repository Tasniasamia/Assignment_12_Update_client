import React from 'react';
import Instructor_card from './Instructor_card/Instructor_card';
import useInstructor from '../../../../Hooks/useInstructor';
import { Helmet } from 'react-helmet';

const Instructor = () => {
    const [Instructor]=useInstructor();
    return (
        <div className='my-20'>
             <Helmet>
        <title>Whistle | Instructors</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
        
        Instructor.map(index=><Instructor_card key={index._id} indexdata={index}></Instructor_card>)
        }
        </div>  </div>
)};

export default Instructor;