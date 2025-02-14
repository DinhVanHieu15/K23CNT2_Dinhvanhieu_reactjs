// src/App.js
import React from "react";
import DvhCompInfor from "./DvhCompInfor";

function App() {
  const personalInfo = {
    fullName: "Đinh Văn Hiếu",
    studentID: "2310900122",
    birthDate: "15/08/2005",
    phone: "0383167565",
    className: "K23CNT2"
  };

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <DvhCompInfor info={personalInfo} />
    </div>
  );
}

export default App;