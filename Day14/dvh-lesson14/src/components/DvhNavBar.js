import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'; // Import CSS file


export default function DvhNavBar() {
  return (
    <nav className="nav-bar">
    <Link to="/" className="nav-link">Trang chủ</Link>
    <span className="separator"> | </span>
    <Link to="/list-user" className="nav-link">Danh sách User</Link>
    <span className="separator"> | </span>
    <Link to="/create-user" className="nav-link">Thêm mới User</Link>
  </nav>
  );
}
