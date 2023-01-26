
import './App.css';
import { useState } from 'react';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

function App() {

  const [newPlayer, setNewPlayer] =useState('')
  const [playerList, setPlayerList]=useState([])
  const handleChange =(event)=>{
    setNewPlayer(event.target.value)
  }
  const handleClick =(event)=>{
    event.preventDefault();
    let templist ={
        id: Math.random()*10,
        player: newPlayer
    }
   
    setPlayerList(oldList=>[...oldList,templist]);
    setNewPlayer('')
  }
  const handleDelete=(id)=>{
    const newplaylist=playerList.filter(player=>player.id!==id)
    setPlayerList(newplaylist)
    setNewPlayer('')
  }
  return (
    <div className="App">
      <AddPlayer handleChange={handleChange} handleClick={handleClick}/>
      <PlayerList playerList={playerList} handleDelete={handleDelete}/>
      
     
    </div>
  );
}

export default App;
