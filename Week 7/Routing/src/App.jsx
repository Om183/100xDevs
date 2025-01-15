import React from 'react'
import { lazy } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Topbar from './components/Topbar'
const Dashboard = lazy(()=> import("./components/Dashboard"));
const Landing = lazy(()=> import("./components/Landing"));

const App = () => {

  return (
     <div>     
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App