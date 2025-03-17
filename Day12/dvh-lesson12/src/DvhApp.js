import React, { useState } from 'react'
import {  BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import DvhNavNar from './components/DvhNavNar'
import DvhListUser from './components/DvhListUser'
import DvhAbout from './components/DvhAbout'
import DvhHome from './components/DvhHome'
import DvhFormUser from './components/DvhFormUser'

export default function DvhApp() {

    const ListUsers = [
      { id: "SV001", dvhFullName: "Đinh Văn Hiếu", dvhUserName: "vanhieu", dvhPass: "123456@" },
      { id: "SV002", dvhFullName: "Phạm Thanh Thảo", dvhUserName: "thanhthao", dvhPass: "1234598@" },
      { id: "SV003", dvhFullName: "Nguyễn Đình Phong", dvhUserName: "dinhphong", dvhPass: "123456@" },

    ]
    const[dvhUsers, setDvhUsers] = useState(ListUsers)
    // xử lí sự kiện thêm mới
    const dvhHandleAdd = (dvhParam)=> {
      console.log("dvhHandleAdd:", dvhParam);
      setDvhUsers(prev => { return [
        ...prev,
        dvhParam
      ]})
    }

  return (
    <div>
        <h1> React Router</h1>
        <hr/>
          <Router>
            <DvhNavNar />
              <Routes>
                <Route path="/" element={<DvhHome/>}/>
                <Route path="/about" element={<DvhAbout/>} />
                <Route path="/contact" element={<DvhNavNar/>} />
                <Route path="/list-user" element={<DvhListUser renderDvhUsers={dvhUsers} />} />
                <Route path="/creat-user"element={<DvhFormUser onDvhAddnew={dvhHandleAdd} />} />
              </Routes>
          </Router>
    </div>
  )
}
