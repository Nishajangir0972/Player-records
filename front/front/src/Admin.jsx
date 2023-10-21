import React, { useState } from 'react'
import './App.css'
import axios  from 'axios'
import { Link } from 'react-router-dom'

function Admin() {
const [serial , setSerial] = useState("")
const [player , setPlayer] = useState("")
const [aadhar , setAadhar] = useState("")
const [game , setGame] = useState("")
const [age , setAge] = useState("")
const [position , setPosition] = useState("")
const [state , setState] = useState("")
const [tournament , setTournament] = useState("")
const [organised , setOrganised] = useState("")
const [venue , setVenue] = useState("")


  const AddingDetails = async()=>{
    console.log("hello");
    let result = await axios.post("http://localhost:8080/form/add" ,{
      serial, player , aadhar, game , age , position , state , tournament , organised, venue
    })
    result = result.data
    if(result){
      alert("Data has been added")
    }
  }

  return (
    <>
    <div className="header">
<h4><Link to='/admin'>Admin</Link></h4>
<h4><Link to='/search'>Search</Link></h4>

    </div>
    <div className='main'>
      
      <div className="form">
        <div className="item">
          <label htmlFor="serialno">Serial No</label>
          <input type="text" placeholder='Enter Serial No' value={serial} onChange={(e)=>{setSerial(e.target.value)}}/>
        </div>
        <div className="item">
          <label htmlFor="Player">Player Name</label>
          <input type="text" placeholder='Enter Player Name' value={player} onChange={(e)=>{setPlayer(e.target.value)}}/>
        </div>
        <div className="item">
          <label htmlFor="Aadhar">Aadhar No.</label>
          <input type="number" placeholder='Enter Aadhar No.' value={aadhar} onChange={(e)=>{setAadhar(e.target.value)}} />
        </div>
        <div className="item">
          <label htmlFor="Game">Game</label>
          <input type="text" placeholder='Enter Your Game Name' value={game} onChange={(e)=>{setGame(e.target.value)}} />
        </div>
        <div className="item">
          <label htmlFor="dropdown">Age</label>
          <select name="age" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}}>
          <option value="Junior">Select</option>
<option value="Junior">Junior</option>

            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="Position">Position</label>
          <select name="position" id="position" value={position} onChange={(e)=>{setPosition(e.target.value)}}>
          <option value="select">Select</option>

            <option value="1ST GOLD">1st Gold</option>
            <option value="2ND SILVER">2nd Silver</option>
            <option value="3RD BRONZE">3rd Bronze</option>
            <option value="qualified">Qualified</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" placeholder='Enter Your State' value={state} onChange={(e)=>{setState(e.target.value)}} />
        </div>
        <div className="item">
          <label htmlFor="tournament">Tournament Name</label>
          <input type="text" id='tournamment' placeholder='Enter Tournament Name'  value={tournament} onChange={(e)=>{setTournament(e.target.value)}}/>
        </div>
        <div className="item">
          <label htmlFor="organised">Organised At</label>
          <input type="text" name="organises" id="organised" placeholder='Enter Organised Place' value={organised} onChange={(e)=>{setOrganised(e.target.value)}} />
        </div>
        <div className="item">
          <label htmlFor="venue">Venue</label>
          <input type="text" id='venue' placeholder='Enter Venue' value={venue} onChange={(e)=>{setVenue(e.target.value)}}/>
        </div>
        <button id='adds' onClick={(e)=>{
          e.preventDefault();
          AddingDetails()
        }}>Submit</button>
      </div>

    </div>
    </>
  )
}

export default Admin