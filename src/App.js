
import './App.css';
import usePlayer  from './usePlayer'
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';


function App() {

  const {handleChange,handleClick,handleDelete,playerList} = usePlayer()
  return (
    <div className="App">
      <AddPlayer handleChange={handleChange} handleClick={handleClick} />
      <PlayerList playerList={playerList} handleDelete={handleDelete}/>
      
     
    </div>
  );
}

export default App;
