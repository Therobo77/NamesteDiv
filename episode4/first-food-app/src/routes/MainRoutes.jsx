
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Pages/Body'
import About from './../Pages/About';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes