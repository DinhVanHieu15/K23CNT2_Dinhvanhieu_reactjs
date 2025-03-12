import React, { useState } from 'react'
import DvhMemberAdd from './components/DvhMemberAdd';
import DvhMenberList from './components/DvhMemberList';

 function DvhApp() {
     const [members, setMembers] = useState([
         {
             id: "2310900122",
             fullname: "Nguyễn Đức Thành",
             username: "nguyenducthanh",
             password: "123456",
         },
         {
             id: "2310900456",
             fullname: "Nguyễn Huy Thông",
             username: "nguyenhuythong",
             password: "098763",
         },
         {
             id: "2310900789",
             fullname: "Nguyễn Duy Khánh",
             username: "nguyenduykhanh",
             password: "098722",
         },
     ]);
 
     const add_Member = (newMember) => {
         setMembers([...members, newMember]);
     };
 
     return (
         <div style={{ textAlign: "center", fontFamily: "Arial" }}>
             <h1>Quản lý thành viên</h1>
             <DvhMemberAdd add_Member={add_Member} />
             <DvhMenberList members={members} />
         </div>
     );
 };
 
export default DvhApp;