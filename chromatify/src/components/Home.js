import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header'

const Home = (props) => {
  return (
    <div className="login">
      <Header />
      <Button varient ="info" type="submit">
        Login to Spotify
      </Button>
    </div>
  )
}

export default connect()(Home);
