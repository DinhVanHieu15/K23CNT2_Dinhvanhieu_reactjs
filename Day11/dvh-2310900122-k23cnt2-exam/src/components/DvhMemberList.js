import React, { Component } from 'react'

class DvhMenberList extends Component {
    render() {
        return (
            <div>
                <h2> danh sách sinh viên</h2>
                <table border='1' style={{ width: "50%", margin: "auto", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>fullname</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mebers.map((member, index) => (
                            <tr key={index}>
                                <td>{member.id}</td>
                                <td>{member.fullname}</td>
                                <td>{member.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }


}
export default DvhMenberList;