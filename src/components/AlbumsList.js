import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { Link } from 'react-router-dom';
//change a tag to go to details page
const AlbumsList = ({ albums }) => {
  console.log(albums);
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                {/* Changed external a tag to Link to /albumdetails, however the page doesnt render properly. Ask for help here! */}
                  <Link to="/albumdetails">
                    {!_.isEmpty(album.images) ? (
                      <Card.Img
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </Link>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body>
                  <Link to={{pathname: `/chromatify/albumdetails/${album.id}`, state:albums}}>View More</Link>

                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default AlbumsList;
