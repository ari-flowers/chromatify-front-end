import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar'
const NotFoundPage = () => {
  return (
    <>
    <NavBar />
      <Header />
      Page not found.
      <Link to="/dashboard">Return to search.</Link>

    </>
  );
};
export default NotFoundPage;
