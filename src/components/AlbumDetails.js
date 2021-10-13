import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import AlbumsList from './AlbumsList'

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
const AlbumDetails = ({ tracks }) => {
  console.log(tracks);
  return (
    //short syntax for fragments is <> </>

    <>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(track.album.images) ? (
                      <Card.Img
                        variant="top"
                        src={track.album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {track.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};
export default AlbumDetails;
