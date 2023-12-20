import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';
import Signup from '../components/auth/Signup';

const SignupPage = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();
  const info = getUserInfo();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [isAuthenticated]);
  return (
    <div className="bg-white w-screen font-sans text-gray-900">
      <div className="-mt-16">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
            <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
              Signup
            </h1>
          </div>
        </div>
      </div>
      <Signup />
    </div>
  );
};

export default SignupPage;
