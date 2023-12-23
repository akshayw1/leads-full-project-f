import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navbar/NavBar';

const Lay = ({children}) => {
  return (
    <div>
    
   {children}
    </div>
  );
};

export default Lay;
