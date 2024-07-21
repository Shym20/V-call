import React, {useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

const HomePage = () => {

    const [value,setValue] = useState();
    const navigate = useNavigate()
    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])

  return (
    <div className='container'>
      <h1 className="logo">V-call</h1>
      <p className='txt'>Welcome to V-call ! Enter the room code or generate the room code here </p>
      <input className='inpt' value={value} onChange={(e)=> setValue(e.target.value)} type="text" placeholder='Enter Room Code' />
      <button className='btn' onClick={handleJoinRoom}>Join Room</button>
    </div>
  )
}

export default HomePage;
