import React from 'react';
import Carusal from './Carusal/Carusal';
import { Helmet } from 'react-helmet-async';
import useClass from '../../../../Hooks/useClass';
import Card from './Card/Card';
import Instructor_card from '../Instructor/Instructor_card/Instructor_card';
import useInstructor from '../../../../Hooks/useInstructor';
import About from './About_us/About';

const Home = () => {
    const [classes]=useClass();
    const [Instructor]=useInstructor();
    console.log(classes);
    return (
        <div>
              <Helmet>
        <title>Whistle | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Carusal></Carusal>
<About></About>
            <div className='my-24'>
                <div className='text-center my-8'>
                    <h2 className='text-6xl font-extrabold'>POPULAR CLASSES</h2>
                    <p className='text-xl'style={{color:"#565656"}}>EXCLUSIVE TRAINING PACAKAGES</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
{

    classes.slice(0,6).map(index=><Card key={index._id} indexdata={index}></Card>)
}
</div>        
</div>



<div className='my-24'>
                <div className='text-center my-8'>
                    <h2 className='text-6xl font-extrabold'>TOP INSTRUCTORS</h2>
                    <p className='text-xl'style={{color:"#565656"}}>The team has a proven track record of success in teaching and training .</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
{

Instructor.slice(0,6).map(index=><Instructor_card key={index._id} indexdata={index}></Instructor_card >)
}
</div>        
</div>


<div className='my-24'>
    <div className='grid grid-cols-1 md:grid-cols-4 '>
<div><img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/11/client41.png" alt="contact" /></div>


<div><img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/11/client21.png" alt="contact" /></div>

<div><img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/11/client31.png" alt="contact" /></div>
<div>
    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/11/client11.png" alt="contact" />
</div>

    </div>

</div>
        </div>
    );
};

export default Home;