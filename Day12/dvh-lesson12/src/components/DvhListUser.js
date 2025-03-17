import React from 'react'




export default function DvhListUser(renderDvhUser) {
    const dvhElements = renderDvhUser.map((dvhItem, index) => {
        return (
        <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{dvhItem.id}</td>
                <td>{dvhItem.dvhFullNamw}</td>
                <td>{dvhItem.dvhUserName}</td>
                <td>{dvhItem.dvhPassWord}</td>

            </tr>
        </> )
    })
    return (
        <div>
            <h2> Danh sách tài khoản</h2>
            <table className='table table-border'></table>
            <thead>
                <tr>#</tr>
                <tr>ID</tr>
                <tr>FullName</tr>
                <tr>UserName</tr>
                <tr>Password</tr>
            </thead>
            <tbody>
                {dvhElements}
            </tbody>
        </div>
    )
}
