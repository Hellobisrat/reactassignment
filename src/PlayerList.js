const PlayerList = ({handleDelete,playerList}) => {
    return ( <>
        {
        playerList.map((players)=>{
          return(
            <h3 key={players.id}> {players.player}<button onClick={()=>handleDelete(players.id)}>Delete</button></h3>
          )
        })
        }
    </> );
}
 
export default PlayerList;