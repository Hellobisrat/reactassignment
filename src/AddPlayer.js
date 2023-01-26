const AddPlayer = ({handleChange, handleClick}) => {
    return ( <><h1>Exercise-B</h1>
    <input type='text ' placeholder='Add Player' onChange={handleChange}></input>
    <button onClick={handleClick}>Add player</button></> );
}
 
export default AddPlayer;