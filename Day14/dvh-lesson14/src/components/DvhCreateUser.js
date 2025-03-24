import axios from "axios";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function DvhCreateUser() {

    let Dvhuser = {
        id: '',
        Dvh_name: "",
        Dvh_email: "",
        Dvh_phone: "",
        Dvh_active: false
    }

    const [Dvh_users, setDvhUser] = useState(Dvhuser)
    const DvhApiUrl = "https://67da475135c87309f52bc393.mockapi.io/Dinhvanhieu/dvh_users"

    const navigate = useNavigate();

    const DvhHandleSubmit = (event) => {
        event.preventDefault();

        // Kiểm tra dữ liệu trước khi gửi
        console.log("Dữ liệu chuẩn bị gửi lên API:", Dvh_users);

        axios
            .post(DvhApiUrl, Dvh_users) // Dùng POST để tạo mới dữ liệu
            .then((response) => {
                console.log("Tạo mới thành công:", response.data);
                alert("User đã được thêm thành công!");
                navigate('/list-user'); // Chuyển hướng về danh sách sau khi thêm thành công
            })
            .catch((error) => {
                console.error("Lỗi khi thêm mới:", error);
            });
    };

    const DvhHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    }

    return (
        <div>
            <h2 className="alert alert-success">Thêm mới thông tin User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="dvh_name" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="dvh_name"
                            name="dvh_name"
                            value={Dvh_users.Dvh_name}
                            onChange={(ev) => setDvhUser({ ...Dvh_users, Dvh_name: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="dvh_email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="email"
                            className="form-control"
                            id="dvh_email"
                            name="dvh_email"
                            value={Dvh_users.Dvh_email}
                            onChange={(ev) => setDvhUser({ ...Dvh_users, Dvh_email: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="dvh_phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="dvh_phone"
                            name="dvh_phone"
                            value={Dvh_users.Dvh_phone}
                            onChange={(ev) => setDvhUser({ ...Dvh_users, Dvh_phone: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="dvh_active" className="col-sm-2 col-form-label">
                        Active
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="radio"
                            id="dvh_active_true"
                            name="dvh_active"
                            value="true"
                            checked={Dvh_users.Dvh_active === true}
                            onChange={() => setDvhUser({ ...Dvh_users, Dvh_active: true })}
                        />
                        <label htmlFor="dvh_active_true" className="mx-2 text-success">Hoạt động</label>

                        <input
                            type="radio"
                            id="dvh_active_false"
                            name="dvh_active"
                            value="false"
                            checked={Dvh_users.Dvh_active === false}
                            onChange={() => setDvhUser({ ...Dvh_users, Dvh_active: false })}
                        />
                        <label htmlFor="dvh_active_false" className="mx-2 text-danger">Khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={DvhHandleSubmit}>Create</button>
                        <button className="btn btn-success px-3" onClick={DvhHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}