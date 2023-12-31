
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';
// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:6889', 
//   });

const useAxiosSecure = () => {
  const { signout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:6889/', 
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('accesstoken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await signout();
          // navigate('/Login');
        }
        return Promise.reject(error);
      }
    );
  }, [navigate,signout,axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;