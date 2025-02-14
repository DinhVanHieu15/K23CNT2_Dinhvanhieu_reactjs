// src/DvhCompInfor.js
import React from "react";

function DvhCompInfor({ info }) {
  return (
    <div>
      <p><strong>Họ và tên:</strong> {info.fullName}</p>
      <p><strong>Mã sinh viên:</strong> {info.studentID}</p>
      <p><strong>Ngày sinh:</strong> {info.birthDate}</p>
      <p><strong>Điện thoại:</strong> {info.phone}</p>
      <p><strong>Tên lớp:</strong> {info.className}</p>
    </div>
  );
}

export default DvhCompInfor;
