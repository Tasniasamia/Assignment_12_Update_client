import React from 'react';

const About = () => {
    return (
        <div className='my-24'>
             <div className='text-center my-8'>
                    <h2 className='text-6xl font-extrabold'>{`LET'S PLAY`}</h2>
                    <p className='text-xl'style={{color:"#565656"}}>FEW MORE ENJOYABLE GAMES FOR EXPART LEVEL STUDENTS</p>
                </div>

                <div className='grid grid-cols-1 grid-cols-4 gap-6'>
<div>
    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/ball-kick.jpg" alt="games" />
    <h2>FOOTBALL</h2>
</div>

<div>
    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/bike-racer.jpg" alt="games" />
    <h2>BIKE RACER</h2>
</div>

<div>
    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/cycle-rally.jpg" alt="games" />
    <h2>CYCLE RALLY</h2>
</div>
            
<div className=''>
    <img src="https://dtwhistledev.wpengine.com/wp-content/uploads/2015/12/karate-kata.jpg" alt="games" />
    <h2>KARATE KATA</h2>
</div>  
            
            
                </div>
       </div>
    );
};

export default About;

