import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Components/Pages/Shared/Router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Components/Pages/Shared/AuthProvider/AuthProvider.jsx';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(

 <div className='max-w-screen-xl mx-auto px-0'>
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
 </div>

);