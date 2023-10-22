import React, { useState } from 'react'

import axios from 'axios'
import './search.css'

function Search() {
  const [serial, setSerial] = useState("")
  const [player, setPlayer] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [game, setGame] = useState("")
  const [age, setAge] = useState("")
  const [position, setPosition] = useState("")
  const [state, setState] = useState("")
  const [tournament, setTournament] = useState("")
  const [organised, setOrganised] = useState("")
  const [venue, setVenue] = useState("")
  const [searchValue , setSearchValue] = useState("")
  const [showData , setshowData] = useState(false)
  const [noData , setnoData] = useState(false)


  const searchItem = async () => {
    let result = await axios.get(`http://localhost:8080/form/search/${searchValue}`)
    const response = result.data
    if(response){
      setSerial(response.serial)
      setPlayer(response.player)
      setAadhar(response.aadhar)
      setGame(response.game)
      setAge(response.age)
      setPosition(response.position)
      setState(response.state)
      setTournament(response.tournament)
      setOrganised(response.organised)
      setVenue(response.venue)
      setshowData(true)
      setnoData(false)
      
    }else{
      setshowData(false)
      setnoData(true)
    }
  }


  return (
    <>
      

      <div className="head">
        <div className='search'>
          <input type="number" placeholder='Enter Aadhar No.' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
          <button id='searchbtn' onClick={(e) => {
            e.preventDefault();
            searchItem()
          }}>Search</button>
        </div>
{
  showData && (
    <div className="form">
    <div className="item">
      <label htmlFor="serialno">Serial No</label>
      <input type="text" value={serial} />
    </div>
    <div className="item">
      <label htmlFor="Player">Player Name</label>
      <input type="text" value={player} />
    </div>
    <div className="item">
      <label htmlFor="Aadhar">Aadhar No.</label>
      <input type="text" value={aadhar} />
    </div>
    <div className="item">
      <label htmlFor="Game">Game</label>
      <input type="text" value={game} />
    </div>
    <div className="item">
      <label htmlFor="dropdown">Select</label>
      <input type="text" value={age} />
    </div>
    <div className="item">
      <label htmlFor="Position">Position</label>
      <input type="text" value={position} />
    </div>
    <div className="item">
      <label htmlFor="state">State</label>
      <input type="text" name="state" id="state" value={state} />
    </div>
    <div className="item">
      <label htmlFor="tournament">Tournament Name</label>
      <input type="text" id='tournamment' value={tournament} />
    </div>
    <div className="item">
      <label htmlFor="organised">Organised At</label>
      <input type="text" name="organises" id="organised" value={organised} />
    </div>
    <div className="item">
      <label htmlFor="venue">Venue</label>
      <input type="text" id='venue' value={venue} />
    </div>

  </div>
  )
}
{
  noData && (
    <h3>No DAta........</h3>
  )
}
         

      </div>

    </>
  )
}

export default Search