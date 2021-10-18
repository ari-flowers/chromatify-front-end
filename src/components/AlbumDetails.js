import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from "react-router-dom"
import NavBar from "./NavBar"


//define a functional component
//iterate through each album in an album
//for each track, return the album art, album name, track name, artist, year of release,
//display this information in a card
// code snippet to map and include a comma between each artist


 //     <small>
//       {track.artists.map((artist) => artist.name).join(', ')}
//     </small>

//change the onClick to direct to the AlbumDetails page
// create a route in appRouter.js
const AlbumDetails = () => {
  const location = useLocation()
  const {albums} = location.state
  const [currentAlbum, setCurrentAlbum] = useState({albums})
  // const [albums, setAlbums] = useState(album)
  console.log({albums});

  return (
    <>
    <NavBar />
    <h1>Albums Detail</h1>
    <p>{albums.items[0].name}</p>

    </>
  )
}


export default AlbumDetails;
