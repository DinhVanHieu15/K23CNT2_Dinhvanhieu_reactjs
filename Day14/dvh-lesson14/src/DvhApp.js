import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DvhListUsers from './components/DvhListUsers'
import DvhNavBar from './components/DvhNavBar'
import DvhHome from './components/DvhHome'
import DvhCreateUser from './components/DvhCreateUser'
import DvhEditUser from './components/DvhEditUser'

export default function DvhApp() {
  return (
    <div className='container border my-3 p-3'>
      <Router>
          <DvhNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<DvhHome />} />
            <Route path='/list-user' element={<DvhListUsers />} />
            <Route path='/create-user' element={<DvhCreateUser />} />
            <Route path='/edit-user/:id' element={<DvhEditUser />} />
          </Routes>
      </Router>
    </div>
  )
}
