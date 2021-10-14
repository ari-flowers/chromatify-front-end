import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { Button } from 'react-bootstrap';

const CreatedTracksList = (props) => {
  const [tracks, setTracks] = useState([])

  const getTracks = async () => {
    try {
      const allTracks = await fetch('http://localhost:9000/chromatify')
      console.log('all tracks', allTracks)
      const parsed = await allTracks.json()
      console.log('parsed version', parsed)
      setTracks(parsed)
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      const config = {
        method: 'DELETE'
      }
      const deleteTrack = await fetch(`http://localhost:9000/chromatify/${id}`, config)
      const parsed = await deleteTrack.json()
      const updateTrack = tracks.filter(track => track._id !== parsed._id)
      setTracks(updateTrack)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTracks()
  }, [])

  return (
    <>
    <NavBar />
    <h1>User Added Tracks</h1>
    <main>
      <thead>
        <tr>
          <th>Name</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
      {tracks && tracks.map(track => (
        <tr key={track._id}>
          <td>{track.trackName}</td>
          <td>{track.artistName}</td>
          <td onClick={() => handleDelete(track._id)} className="delete-x">X</td>
          <Link to={`/chromatify/${track._id}/edittrack`}>Edit</Link>
        </tr>
      ))}
      </tbody>
      <Button variant="info" type="submit"><Link to='/chromatify/newtrack'>Add A New Track</Link></Button>
    </main>
    </>
  )
}

export default CreatedTracksList
