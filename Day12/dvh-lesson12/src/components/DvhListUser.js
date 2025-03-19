import React from 'react';

export default function DvhListUser({ dvhUsers }) {
    const dvhElements = dvhUsers.map((dvhItem, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{dvhItem.id}</td>
            <td>{dvhItem.dvhFullName}</td>
            <td>{dvhItem.dvhUserName}</td>
            <td>{dvhItem.dvhPassWord}</td>
        </tr>
    ));

    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {dvhElements}
                </tbody>
            </table>
        </div>
    );
}
