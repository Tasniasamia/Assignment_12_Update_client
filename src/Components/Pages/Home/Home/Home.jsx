import React from 'react';
import Carusal from './Carusal/Carusal';
import { Helmet } from 'react-helmet-async';
import useClass from '../../../../Hooks/useClass';
import Card from './Card/Card';

const Home = () => {
    const [classes]=useClass();
    console.log(classes);
    return (
        <div>
              <Helmet>
        <title>Whistle | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Carusal></Carusal>

            <div className='my-24'>
                <div className='text-center my-8'>
                    <h2 className='text-6xl font-extrabold'>POPULAR CLASSES</h2>
                    <p className='text-xl'style={{color:"#565656"}}>EXCLUSIVE TRAINING PACAKAGES</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
{

    classes.slice(0,6).map(index=><Card key={index._id} indexdata={index}></Card>)
}
</div>        </div>
        </div>
    );
};

export default Home;