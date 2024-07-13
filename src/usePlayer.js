import { useState } from "react";

const usePlayer = () => {

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
    localStorage.setItem('playerList',JSON.stringify(playerList))
    setNewPlayer('')
    

  }
  const handleDelete=(id)=>{
    const newplaylist=playerList.filter(player=>player.id!==id)
    setPlayerList(newplaylist)
    setNewPlayer('')
  }
  return {handleChange,handleClick,handleDelete,playerList};
}
 
export default usePlayer;