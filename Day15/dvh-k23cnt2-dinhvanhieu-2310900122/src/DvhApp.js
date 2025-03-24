import React from 'react'
import { BrowserRouter as DvhRouter, Route, Routes } from 'react-router-dom';

import DvhNavBar from './components/DvhNavBar'
import DvhHome from './components/DvhHome'
import DvhListUsers from './components/DvhListUsers'
import DvhCreatUsers from './components/DvhCreatUsers'
import DvhEditUsers from './components/DvhEditUsers'

export default function DvhApp() {
  return (
    <div className='container border my-3 p-3'>
       <h1 className='alert alert-sucess text-center'>K23CNT2 - Dinh Van Hieu - 2310900122</h1>
       <hr/>
       <DvhRouter>
        <DvhNavBar/>
        <hr/>
        <Routes>
            <Route path='/' element={<DvhHome/>}/>
            <Route path='dvh-list-user' element={<DvhListUsers/>}/>
            <Route path='dvh-creat-user' element={<DvhCreatUsers/>}/>
            <Route path='dvh-edit-user' element={<DvhEditUsers/>}/>
            
        </Routes>
       </DvhRouter>
    </div>
  )
}
