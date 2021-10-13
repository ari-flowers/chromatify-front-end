import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const EditTrack = (props) => {
  const initialState = {
    trackName: '',
    artistName: ''
  }

  const [input, setInput] = useState(initialState)
  const [loading, setLoading] = useState(true)

  const getTracks = async (id) => {
    try {
      const id = props.match.params.id
      const foundTrack = await fetch(`http://localhost:9000/chromatify/${id}`)
      const parsed = await foundTrack.json()
      setInput(parsed)
      setLoading(false)
    } catch(err) {
      console.log(err);
      props.history.push('/chromatify')
    }
  }

  const updateTrack = async (id, data) => {
    const config = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    console.log(config)
    const updateTrack = await fetch(`http://localhost:9000/chromatify/${id}`, config)
    const parsed = await updateTrack.json()
    props.history.push(`/chromatify/${id}`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    const {trackName, artistName} = input
    const trackData = {trackName, artistName}
    updateTrack(input._id, trackData)
  }

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    getTracks()
  }, [])

  return (
    <div>
      <h1>Edit Track</h1>
      {
        loading ? <h3>Loading...</h3> :
        <form onSubmit = {handleSubmit}>
          <div>
            <label htmlFor="trackName">Name:</label>
            <input id="trackName" name="trackName" value={input.trackName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="artistName">Artist:</label>
            <input id="artistName" name="artistName" value={input.artistName} onChange={handleChange} />
          </div>
          <div>
            <input type = 'submit' value = 'Edit' />
          </div>
        </form>
      }
      <Link to="/dashboard">Return To Search</Link>
    </div>
  )
}

export default EditTrack
