import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {data}=useContext(AuthContext);
    const[processing,setProcessing]=useState(false);
const[error,setError]=useState("");
const[transactiion,setTransaction]=useState("");
 //ClientSecret
 const[clientsecret,setClientSecret]=useState("");
// const[axiosSecure]=useAxiosSecure();
  //price getting for payment
  const {id}=useParams();
  console.log(id);
  const[enroll,setEnroll]=useState(null);
//   const { refetch, data:paymentprice={} } = useQuery({
//     queryKey: ['Cartdata',data?.email],

//   queryFn:async () => {
//         const response = await axios.get(`http://localhost:6889/Cartdata/${id}`)
//         console.log(response.data);
//         return response.data;
      
         
//       },

    
//     })
//     let price=paymentprice?.price
//     console.log(price);

  //price getting for payment
useEffect(()=>{

    fetch(`http://localhost:6889/Cartdata/${id}`)
    .then(res=>res.json())
    .then(data=>{console.log(data);setEnroll(data)})
},[])
 
  


  //send price into server
  useEffect(()=>{
    // if(enroll?.price){
    //     axios.post('/create-payment-intent',{price:enroll?.price})
    //     .then(res=>{
    //       console.log(res.data.clientSecret);
    //       setClientSecret(res.data.clientSecret)})
    // }
   
  
  if(enroll?.price){

console.log(enroll.price);

    fetch('http://localhost:6889/create-payment-intent',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({price:enroll?.price})
      }).then(res=>res.json())
      .then(data=>{console.log("data",data);
      setClientSecret(data.clientSecret)
    console.log("Efewfewr");
    if(data.insertedId){
      
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment has been Successfull',
            showConfirmButton: false,
            timer: 1500
          })
         
    }

    })
  }
  
  },[enroll])
  console.log(clientsecret);
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message)
        
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError("");
      }

      setProcessing(true);
      const {paymentIntent, error:errorhandle} = await stripe.confirmCardPayment(
        clientsecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: data?.email || 'anonymous',
              name:data?.displayName || 'no user'
              ,
            },
          },
        },
      );

      if(errorhandle){
        console.log("get error",errorhandle);
        setError(errorhandle.message);
      }
      setProcessing(false);
      console.log(paymentIntent);
if(paymentIntent.status==="succeeded"){


  const transaction_id=paymentIntent.id;
  setTransaction(transaction_id);
  console.log(transaction_id);
  
}
    };
  
    return (
        <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit"className='btn btn-success m-5' disabled={!stripe || !clientsecret || processing}>
          Pay
        </button>
      </form>
      {error}
      {transactiion && <p className='text-green-600'>Trasaction has completed by transaction id</p>}
      </>
  
    );
  };
  

export default CheckoutForm;