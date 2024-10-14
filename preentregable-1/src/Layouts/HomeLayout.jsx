import React from 'react';
import NavBar from '../components/NavBar';

const HomeLayout = ({ cartCount, children }) => {
  return (
    <div>
      <NavBar cartCount={cartCount} />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;