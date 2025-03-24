import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DvhListUser() {
  // State
  const [dvhListUser, setDvhListUser] = useState([]);
  const dvhApi = "https://67e0d30358cc6bf7852309ad.mockapi.io/dvh-k23cnt2-2310900122/dvh_users";

  useEffect(() => {
    axios
      .get(dvhApi) 
      .then((response) => {
        console.log(response.data);
        setDvhListUser(response.data);
      })
      .catch((error) => {
        console.error('Có xảy ra lỗi', error);
      });
  }, []);

  const dvhHandleDelete = async (dvhId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
      await axios.delete(`${dvhApi}/${dvhId}`);
      
      // Cập nhật danh sách sau khi xóa
      setDvhListUser(dvhListUser.filter(user => user.id !== dvhId));
    }
  };

  const navigate = useNavigate();

  const dvhHandleUpdate = (dvhId) => {
    navigate(`/dvh-edit-user/${dvhId}`);
  };

  // Hiển thị danh sách
  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {dvhListUser.map((dvhUserItem) => (
            <tr key={dvhUserItem.id}>
              <td>{dvhUserItem.id}</td>
              <td>{dvhUserItem.dvh_name}</td>
              <td>{dvhUserItem.dvh_email}</td>
              <td>{dvhUserItem.dvh_phone}</td>
              <td>
                {dvhUserItem.dvh_active ? (
                  <span className='badge text-bg-success'>Hoạt động</span>
                ) : (
                  <span className='badge text-bg-danger'>Khóa</span>
                )}
              </td>
              <td>
                <button className='btn btn-primary mx-2' onClick={() => dvhHandleUpdate(dvhUserItem.id)}>
                  Sửa
                </button>
                <button className='btn btn-danger' onClick={() => dvhHandleDelete(dvhUserItem.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
