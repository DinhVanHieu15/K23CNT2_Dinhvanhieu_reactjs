import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DvhNavNar from './components/DvhNavNar';
import DvhListUser from './components/DvhListUser';
import DvhAbout from './components/DvhAbout';
import DvhHome from './components/DvhHome';
import DvhFormUser from './components/DvhFormUser';
import DvhContact from './components/DvhContact';

export default function DvhApp() {
    const ListUsers = [
        { id: "SV001", dvhFullName: "Đinh Văn Hiếu", dvhUserName: "vanhieu", dvhPassWord: "123456@" },
        { id: "SV002", dvhFullName: "Phạm Thanh Thảo", dvhUserName: "thanhthao", dvhPassWord: "1234598@" },
        { id: "SV003", dvhFullName: "Nguyễn Đình Phong", dvhUserName: "dinhphong", dvhPassWord: "123456@" },
    ];

    const [dvhUsers, setDvhUsers] = useState(ListUsers);

    const dvhHandleAdd = (dvhParam) => {
        console.log("dvhHandleAdd:", dvhParam);
        setDvhUsers(prev => [...prev, dvhParam]);
    };

    return (
        <Router>
            <h1>React Router</h1>
            <hr />
            <DvhNavNar />
            <Routes>
                <Route path="/" element={<DvhHome />} />
                <Route path="/about" element={<DvhAbout />} />
                <Route path="/contact" element={<DvhContact />} />
                <Route path="/list-user" element={<DvhListUser dvhUsers={dvhUsers} />} />
                <Route path="/creat-user" element={<DvhFormUser onDvhAddNew={dvhHandleAdd} />} />
            </Routes>
        </Router>
    );
}
