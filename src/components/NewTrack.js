import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const NewTrack = (props) => {
  const initialState = {
    trackName: '',
    artistName: ''
  }

  const [input, setInput] = useState(initialState)
  const handleChange = (e) => {
    setInput({...input, [e.target.id]: e.target.value})
  }

  const newTrack = async(data) => {
    console.log('newTrack')

    try {
      const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const createdTrack = await fetch('http://localhost:9000/chromatify', config)
      const parsed = await createdTrack.json()
      props.history.push('/chromatify')

    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(initialState)
    newTrack(input)
  }

  return (
    <div class="new-form">

    <form onSubmit = {handleSubmit}>

      <label htmlFor="trackName">Name:</label>
      <input id="trackName" name="trackName" value={input.trackName} onChange={handleChange} />

      <label htmlFor="artistName">Artist:</label>
      <input id="artistName" name="artistName" value={input.artistName} onChange={handleChange} />

      <input type = 'submit' value = 'Add A Track!' />

    </form>
    </div>
  )
}





export default NewTrack
