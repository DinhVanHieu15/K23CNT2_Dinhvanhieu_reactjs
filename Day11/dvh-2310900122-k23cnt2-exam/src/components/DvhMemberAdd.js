import React, { useState } from "react";

const DvhMemberAdd = ({ addMember }) => {
  const [newMember, setNewMember] = useState({
    id: "",
    fullname: "",
    username: "",
    password: "",
  });

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  // Hàm xử lý thêm thành viên
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMember.id && newMember.fullname && newMember.username && newMember.password) {
      addMember(newMember);
      setNewMember({ id: "", fullname: "", username: "", password: "" });
    }
  };

  return (
    <div>
      <h2>Thêm Thành Viên</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input type="text" name="id" placeholder="ID" value={newMember.id} onChange={handleChange} required />{" "}
        <input type="text" name="fullname" placeholder="Họ và Tên" value={newMember.fullname} onChange={handleChange} required />{" "}
        <input type="text" name="username" placeholder="Username" value={newMember.username} onChange={handleChange} required />{" "}
        <input type="password" name="password" placeholder="Password" value={newMember.password} onChange={handleChange} required />{" "}
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default DvhMemberAdd;