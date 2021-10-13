import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const NotFoundPage = () => {
  return (
    <>
      <Header />
      Page not found.
      <Link to="/dashboard">Home Page</Link>
      <Link to="/chromatify/newtrack">Add A Track</Link>
      <Link to="/chromatify/created">View Added Tracks</Link>
    </>
  );
};
export default NotFoundPage;
