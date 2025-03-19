import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DvhAxiosUsers from '../api/Dvh_api';

export default function DvhEditUser() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Dvh_name: '',
    Dvh_email: '',
    Dvh_phone: '',
    Dvh_active: '',
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await DvhAxiosUsers.get(`/Dvh_users/${id}`);
        setFormData(response.data); // Assuming the API returns the user object
      } catch (error) {
        console.error('Error fetching user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi tải thông tin user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (e.target.value === 'true') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await DvhAxiosUsers.put(`/Dvh_users/${id}`, formData);
      setAlert({ type: 'success', message: 'Cập nhật user thành công!' });
      setTimeout(() => {
        setAlert(null);
        navigate('/list-user');
      }, 1000);
    } catch (error) {
      console.error('Error updating user:', error);
      setAlert({ type: 'danger', message: 'Lỗi khi cập nhật user!' });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sửa Thông Tin User</h2>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Dvh_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${errors.Dvh_name ? 'is-invalid' : ''}`}
            id="Dvh_name"
            name="Dvh_name"
            value={formData.Dvh_name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
          />
          {errors.Dvh_name && <div className="invalid-feedback">{errors.Dvh_name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="Dvh_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.Dvh_email ? 'is-invalid' : ''}`}
            id="Dvh_email"
            name="Dvh_email"
            value={formData.Dvh_email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          {errors.Dvh_email && <div className="invalid-feedback">{errors.Dvh_email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="Dvh_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${errors.Dvh_phone ? 'is-invalid' : ''}`}
            id="Dvh_phone"
            name="Dvh_phone"
            value={formData.Dvh_phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
          {errors.Dvh_phone && <div className="invalid-feedback">{errors.Dvh_phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Dvh_active_true"
              name="Dvh_active"
              value="true"
              checked={formData.Dvh_active === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Dvh_active_true">
              Hoạt động
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Dvh_active_false"
              name="Dvh_active"
              value="false"
              checked={formData.Dvh_active === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Dvh_active_false">
              Khóa
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <button type="submit" className="btn btn-primary">
            Cập Nhật
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/list-user')}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}