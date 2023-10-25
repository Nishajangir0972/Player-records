import React, { useState , useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import axios from 'axios'
import './search.css'

function Search() {
  const [srno, setSerial] = useState("")
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
      setSerial(response.srno)
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


  const formContainerRef = useRef(null);
  const Generatepdf = () => {
    const formContainer = formContainerRef.current;
    html2canvas(formContainer)
      .then((canvas) => {
        html2canvas(formContainer).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', 'a4');

          const pageWidth = pdf.internal.pageSize.width - 20;
          const pageHeight = pdf.internal.pageSize.height - 20;

          pdf.addImage(imgData, 'PNG', 10, 10, pageWidth, pageHeight);
          pdf.save('form.pdf');
        });
      })
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
    <div className="form"  ref={formContainerRef}>
    <div className="item">
      <label htmlFor="serialno">Serial No</label>
      <input type="text" value={srno} />
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
    <div className="item">
    <label htmlFor="action">Action</label>
<button onClick={(e)=>{e.preventDefault();
Generatepdf()
}}>Download Pdf</button>
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