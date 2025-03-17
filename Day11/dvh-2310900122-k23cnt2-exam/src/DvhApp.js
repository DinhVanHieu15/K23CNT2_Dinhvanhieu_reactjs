import React, { useState } from "react";
import DvhMemberAdd from "./components/DvhMemberAdd";
import DvhMemberList from "./components/DvhMemberList";


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

    const addMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Quản Lý Thành Viên</h1>
            <DvhMemberAdd addMember={addMember} />
            <DvhMemberList members={members} />
        </div>
    );
}

export default DvhApp;
