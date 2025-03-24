import React, { useEffect, useState } from 'react'
import DvhAxiosUsers from '../api/Dvh_api'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function DvhListUser() {

    const navigate = useNavigate();
    const [DvhListUser, setDvhListUser] = useState([]);
    const DvhGetAllUser = async () => {
        //Gọi Api lấy dữ liệu
        const Dvh_resp = await axios.get("https://67da475135c87309f52bc393.mockapi.io/Dinhvanhieu/dvh_users");
        setDvhListUser(Dvh_resp.data)
    }

    //Gọi Api và lấy dữ liệu cho biến state (DvhListUser)
    useEffect(() => {
        DvhGetAllUser()
    }, [])

    //hàm xử lí khi sửa
    const DvhHandleUpdate = (id)=>{
        navigate(`/edit-user/${id}`);
    }

    //hàm xử lí khi xóa
    const DvhHandleDelete = async (id)=>{
        if(window.confirm('Bạn có muốn xóa không??')){
            await DvhAxiosUsers.delete("/dvh_users/"+id);

            let DvhListUserDelete = DvhListUser.filter(x=>x.id !==id);
            setDvhListUser(DvhListUserDelete);

        }
    }

    // tạo hiển thị active
    const DvhActiveElement = (flag) => {
        if (flag === true || flag === "true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }

    //duyệt dữ liệu từ state và hiển thị
    const DvhElementUser = DvhListUser.map((dvh_users) => {
        return (
            <tr key={dvh_users.id}>
                <td>{dvh_users.id}</td>
                <td>{dvh_users.dvh_name}</td>
                <td>{dvh_users.dvh_email}</td>
                <td>{dvh_users.dvh_phone}</td>
                <td>
                    {
                        DvhActiveElement(dvh_users.dvh_active)
                    }
                </td>
                <td>
                    <button onClick={() => DvhHandleUpdate(dvh_users.id)} className='btn btn-primary mx-1 px-3'>Sửa</button>
                    <button onClick={() => DvhHandleDelete(dvh_users.id)} className='btn btn-success mx-1 px-3'>Xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='container mt-4'>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DvhElementUser
                    }
                </tbody>
            </table>
        </div>
    )
}