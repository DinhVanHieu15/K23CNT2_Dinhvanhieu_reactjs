import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function DvhEditUser() {

    //api
    const dvhApiUrl = "https://67da475135c87309f52bc393.mockapi.io/Dinhvanhieu/dvh_users"
    //lấy biến id trên url
    const { id } = useParams(); // <Route path='/edit-user/:id' element={<DvhEditUser />} />; navigate(`/edit-user/${dvhId}`);
    //Khởi tạo state cho component
    const [dvh_editUser, setDvhEditUser] = useState({
        dvh_name: '', dvh_email: '', dvh_phone: '', dvh_active: false
    })
    //đọc dữ liệu từ api và set cho state: dvh_editUser
    useEffect(() => {
      console.log("Fetching data with ID:", id);
      if (!id) {
          console.error("ID is undefined or null");
          return;
      }
      axios.get(`${dvhApiUrl}/${id}`)
          .then((dvh_response) => {
              console.log("Data received:", dvh_response.data);
              setDvhEditUser(dvh_response.data);
          })
          .catch((error) => {
              console.error("Lỗi khi đọc dữ liệu từ API:", error);
          });
  }, [id]);
  

    //Hàm xử lí khi người dùng thay đổi trạng thái Active
    const dvhHandleRadioChange = (ev) => {
        setDvhEditUser({
            ...dvh_editUser,
            dvh_active: ev.target.value === "true", // Chuyển "true" thành true (boolean)
        });
    };
    //tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
    const navigate = useNavigate();

    //Khi người dùng nhấn nút submit => lấy dữ liệu từ form post vào api
    //Hàm cập nhật những thay đổi trên form vào api
    const dvhHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Data to update:", dvh_editUser);
    
        axios
            .put(`${dvhApiUrl}/${id}`, dvh_editUser)
            .then((dvh_response) => {
                console.log("Update Success:", dvh_response.data);
                alert('Successed!');
                navigate('/list-user');
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu:", error);
            });
    };
    // khi click vào nút back
    const dvhHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    };

    return (
        <div>
            <h2 className="alert alert-success">Sửa thông tin User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="dvh_name" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="Dvh_name"
                            name="Dvh_name"
                            value={dvh_editUser.dvh_name}
                            onChange={(ev) => setDvhEditUser({ ...dvh_editUser, dvh_name: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Dvh_email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="email"
                            className="form-control"
                            id="Dvh_email"
                            name="Dvh_email"
                            value={dvh_editUser.dvh_email}
                            onChange={(ev) => setDvhEditUser({ ...dvh_editUser, dvh_email: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Dvh_phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="Dvh_phone"
                            name="Dvh_phone"
                            value={dvh_editUser.dvh_phone}
                            onChange={(ev) => setDvhEditUser({ ...dvh_editUser, dvh_phone: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Dvh_active" className="col-sm-2 col-form-label">
                        Active
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="radio"
                            id="Dvh_active_true"
                            name="Dvh_active"
                            value={'true'}
                            checked={dvh_editUser.dvh_active === 'true' || dvh_editUser.dvh_active === true} // Kiểm tra nếu giá trị là "true"
                            onChange={dvhHandleRadioChange}
                        /> <label htmlFor="Dvh_active_true" className="mx-2 text-success">Hoạt động</label>
                        <input
                            type="radio"
                            id="Dvh_active_false"
                            name="Dvh_active"
                            value={'false'}
                            checked={dvh_editUser.dvh_active === 'false' || dvh_editUser.dvh_active === false} // Kiểm tra nếu giá trị là "false"
                            onChange={dvhHandleRadioChange}
                        /> <label htmlFor="Dvh_active_false" className="mx-2 text-danger">Đang khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={(e)=>dvhHandleSubmit(e)}>Update</button>
                        <button className='btn btn-success px-3' onClick={dvhHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}