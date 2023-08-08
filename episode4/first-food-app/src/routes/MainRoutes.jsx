
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Pages/Body'
import About from './../Pages/About';
import PageNotFound from '../Pages/PageNotFound';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes