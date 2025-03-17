import React, { useState } from "react";

const DvhMemberList = ({ members, deleteMember, editMember }) => {
    // Trạng thái hiển thị mật khẩu cho từng thành viên
    const [showPasswords, setShowPasswords] = useState({});

    // Hàm bật/tắt mật khẩu
    const togglePasswordVisibility = (id) => {
        setShowPasswords((prev) => ({
            ...prev,
            [id]: !prev[id], // Đảo ngược trạng thái hiển thị của ID đó
        }));
    };

    return (
        <div>
            <h2>Danh Sách Thành Viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và Tên</th>
                        <th>Username</th>
                        <th>Mật Khẩu</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.fullname}</td>
                            <td>{member.username}</td>
                            <td>
                                <div className="password-container">
                                    <input
                                        type={showPasswords[member.id] ? "text" : "password"}
                                        className="password-field"
                                        value={member.password}
                                        readOnly
                                    />
                                    <button
                                        className="toggle-password-btn"
                                        onClick={() => togglePasswordVisibility(member.id)}
                                    >
                                        {showPasswords[member.id] ? "👁️" : "🔒"}
                                    </button>
                                </div>
                            </td>
                            <td className="action-buttons">
                                <button className="edit-btn" onClick={() => editMember(member)}>Sửa</button>
                                <button className="delete-btn" onClick={() => deleteMember(member.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DvhMemberList;
