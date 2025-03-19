import React, { useEffect, useId, useState } from 'react'
import axios from 'axios'

export default function DvhReadApiLocal() {
    //khởi tạo State
    const [dvhListUser, setDvhListUser] = useState([])

    const apiUrl = 'http://localhost:3001/users'

    // lấy danh sách
        useEffect(()=>{
            axios
                .get(apiUrl)
                .then((dvhResponse)=>{
                    setDvhListUser(dvhResponse.data)
                })
                .catch((error)=>{
                    console.log("lỗi");
                })
        }
    
    )
  return (
    <div>
      <h2>đọc dữ liệu từ api </h2>
      <table className='table table-border'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    dvhListUser.map((dvhItem, index)=>{
                        return(
                            <tr>
                                <td>{dvhItem.fullName}</td>
                                <td>{dvhItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>
    </div>
  )
}
