import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';
import SearchCard from './searchCard/searchCard';
import TuteCard from './TuteCard/TuteCard';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="w-full grid grid-cols-2">
        <div className="px-10">
          <SearchCard />
        </div>
        <div className="h-44">
          <TuteCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
