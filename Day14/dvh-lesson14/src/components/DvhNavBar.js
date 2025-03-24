import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS file

export default function DvhNavBar() {
  return (
    <nav className="nav-bar d-flex justify-content-center p-3 bg-light border-bottom">
      <Link to="/" className="nav-link mx-3 text-primary fw-bold">Trang chủ</Link>
      <span className="separator">|</span>
      <Link to="/list-user" className="nav-link mx-3 text-primary fw-bold">Danh sách User</Link>
      <span className="separator">|</span>
      <Link to="/create-user" className="nav-link mx-3 text-primary fw-bold">Thêm mới User</Link>
    </nav>
  );
}
