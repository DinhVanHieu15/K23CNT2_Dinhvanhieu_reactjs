import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DvhEditUser() {
  const dvhUser = {
    id: 0,
    dvh_name: '',
    dvh_email: '',
    dvh_phone: '',
    dvh_active: true,
  };

  const [dvh_user, setDvh_User] = useState(dvhUser);
  const dvhApi = "https://67e0d30358cc6bf7852309ad.mockapi.io/dvh-k23cnt2-2310900122/dvh_users";

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${dvhApi}/${id}`)
      .then((response) => {
        console.log(response.data);
        setDvh_User(response.data);
      })
      .catch((error) => {
        console.error('Có xảy ra lỗi', error);
      });
  }, [id]);

  const dvhHandleSubmit = (ev) => {
    ev.preventDefault();
    console.log(dvh_user);
    axios
      .put(`${dvhApi}/${id}`, dvh_user)
      .then(() => {
        alert('Cập nhật thành công!');
        navigate('/dvh-list-user');
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật:', error);
      });
  };

  return (
    <div>
      <h2>Sửa thông tin</h2>
      <form onSubmit={dvhHandleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="dvh_name" className="col-sm-2 col-form-label">
            FullName
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="dvh_name"
              name="dvh_name"
              value={dvh_user.dvh_name}
              onChange={(ev) => setDvh_User({ ...dvh_user, dvh_name: ev.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="dvh_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="dvh_email"
              name="dvh_email"
              value={dvh_user.dvh_email}
              onChange={(ev) => setDvh_User({ ...dvh_user, dvh_email: ev.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="dvh_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="dvh_phone"
              name="dvh_phone"
              value={dvh_user.dvh_phone}
              onChange={(ev) => setDvh_User({ ...dvh_user, dvh_phone: ev.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input
              type="radio"
              id="dvh_active_true"
              className="mx-3"
              checked={dvh_user.dvh_active === true}
              onChange={() => setDvh_User({ ...dvh_user, dvh_active: true })}
              name="dvh_active"
            />
            <label htmlFor="dvh_active_true">Hoạt động</label>

            <input
              type="radio"
              id="dvh_active_false"
              className="mx-3"
              checked={dvh_user.dvh_active === false}
              onChange={() => setDvh_User({ ...dvh_user, dvh_active: false })}
              name="dvh_active"
            />
            <label htmlFor="dvh_active_false">Khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary mx-2 px-2">
              Cập nhật
            </button>
            <button type="button" className="btn btn-success mx-2" onClick={() => navigate(-1)}>
              Trở lại
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
