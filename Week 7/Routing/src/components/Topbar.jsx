import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate = useNavigate();

  return (

    <div style={{background: "gold"}}>
        Hi Om

        <br />
        <br />

        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>

        <button onClick={()=>{
          navigate("/")
        }}>Landing</button>

        <br />
        <br />
      </div>
  )
}

export default Topbar