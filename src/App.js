
import './App.css';
import { useState } from 'react';

function App() {

  const [newPlayer, setNewPlayer] =useState('')
  const [playerList, setPlayerList]=useState([])
  const handleChange =(event)=>{
    setNewPlayer(event.target.value)
  }
  const handleClick =(event)=>{
    event.preventDefault();
    let templist =playerList
    templist.push(newPlayer)
    setPlayerList(templist)
    setNewPlayer('')
  }
  const handleDelete=(player)=>{
    const newplaylist=playerList.filter(players=>players!==player)
    setPlayerList(newplaylist)
    setNewPlayer('')
  }
  return (
    <div className="App">
      <h1>Exercise-B</h1>
      <input type='text ' placeholder='Add Player' onChange={handleChange}></input>
      <button onClick={handleClick}>Add player</button>
      {
        playerList.map((player)=>{
          return (
            <h3 key={player}> {player}<button onClick={()=>handleDelete(player)}>Delete</button></h3>
          )

        })
      }
     
    </div>
  );
}

export default App;
