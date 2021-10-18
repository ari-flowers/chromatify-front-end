import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { Link } from 'react-router-dom';

const TracksList = ({ tracks }) => {
  console.log('displaying tracks', tracks);
  return (
    <React.Fragment>

      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            const {name, id, trackNumber, duration, href} = track
            const data = {name, id, trackNumber, duration, href, albumName: track.album.name}
            console.log("track info", track);
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
                    {/*<Link to={{pathname: `/chromatify/trackdetails/${track.id}`, state:{track:{...data}}}}>View More</Link>*/}
                </Card>
              </React.Fragment>
            );
          })}

        </div>
      )}
    </React.Fragment>
  );
};
export default TracksList;
