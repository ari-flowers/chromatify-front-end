import React, { useState } from 'react';



//define a functional component
//iterate through each track in an album
//for each track, return the album art, album name, track name, artist, year of release,
//display this information in a card
// code snippet to map and include a comma between each artist


 //     <small>
//       {track.artists.map((artist) => artist.name).join(', ')}
//     </small>

//change the onClick to direct to the AlbumDetails page
// create a route in appRouter.js
const AlbumDetails = ({albums}) => {
  const [currentAlbum, setCurrentAlbum] = useState({albums})
  // const [albums, setAlbums] = useState(album)
  console.log({albums});

  return (<>
    <h1>Testing Detail...</h1>
    </>
  )
}


export default AlbumDetails;
