const AddPlayer = ({handleChange, handleClick,txt}) => {
    return ( 
    <>
    <h1>Player List </h1>
    <input onChange={handleChange}   type='text ' placeholder='Add Player' />
    <button onClick={handleClick}>Add player</button>
    </> 
    );
}
 
export default AddPlayer;