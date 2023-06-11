import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './Student_Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet';

const Strippayment = () => {
    const stripePromise = loadStripe(`pk_test_51NEdRqLQLVWVnV1H4MHD7YkLV0tdNtffd0kxei9wZ3k9zwW7UMqpky6kGQTBCU6THRX0I5rKXU94XC5GEasVY5dW00a44qZLwQ`);
    return (
        <div className='w-full p-5'>
             <Helmet>
        <title>Whistle | Payment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      </div>
    );
};

export default Strippayment;