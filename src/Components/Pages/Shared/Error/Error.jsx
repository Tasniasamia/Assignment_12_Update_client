import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './Error.css';
import { Helmet } from 'react-helmet';
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className="errorpags ">
          <Helmet>
        <title>Whistle | Error</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <section className='flex items-center justify-center p-5  text-black '>
      <div className='container flex  items-center justify-end px-5 mx-auto py-80 '>

        <div className=' text-center '>
         
          <Link
            to='/'
            className='px-5 py-3  btn btn-wide rounded  text-none font-bold'
          >
            Back to homepage
          </Link>
        </div>
        </div>
     
    </section>
    </div>
  )
}

export default ErrorPage