import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from "react-router-dom"
import NavBar from "./NavBar"

const TrackDetails = () => {
  const location = useLocation()
  const {track} = location.state
  const [currentTrack, setCurrentTrack] = useState(track)
console.log(track);
  return (
    <h1>Test Track Details</h1>

  )
}


export default TrackDetails;
