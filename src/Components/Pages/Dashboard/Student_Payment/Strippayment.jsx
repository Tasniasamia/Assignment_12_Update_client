import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './Student_Payment';
import { loadStripe } from '@stripe/stripe-js';

const Strippayment = () => {
    const stripePromise = loadStripe(`pk_test_51NEdRqLQLVWVnV1H4MHD7YkLV0tdNtffd0kxei9wZ3k9zwW7UMqpky6kGQTBCU6THRX0I5rKXU94XC5GEasVY5dW00a44qZLwQ`);
    return (
        <div className='w-full p-5'>
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      </div>
    );
};

export default Strippayment;