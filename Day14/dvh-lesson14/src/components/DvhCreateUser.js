import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DvhAxiosUsers from "../api/Dvh_api";

export default function DvhCreateUser() {
  const navigate = useNavigate();
  const [Dvh_formData, setDvh_formData] = useState({
    Dvh_name: "",
    Dvh_email: "",
    Dvh_phone: "",
    Dvh_active: true, // Mặc định là "Hoạt động"
  });
  const [Dvh_errors, setDvh_errors] = useState({});
  const [Dvh_alert, setDvh_alert] = useState(null);

  // Xử lý sự kiện thay đổi input
  const Dvh_handleChange = (e) => {
    const { name, value, type } = e.target;
    setDvh_formData({
      ...Dvh_formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  // Kiểm tra dữ liệu trước khi gửi
  const validateForm = () => {
    let errors = {};
    if (!Dvh_formData.Dvh_name.trim())
      errors.Dvh_name = "Vui lòng nhập họ và tên!";
    if (!Dvh_formData.Dvh_email.trim()) {
      errors.Dvh_email = "Vui lòng nhập email!";
    } else if (!/\S+@\S+\.\S+/.test(Dvh_formData.Dvh_email)) {
      errors.Dvh_email = "Email không hợp lệ!";
    }
    if (!Dvh_formData.Dvh_phone.trim()) {
      errors.Dvh_phone = "Vui lòng nhập số điện thoại!";
    } else if (!/^\d{10,11}$/.test(Dvh_formData.Dvh_phone)) {
      errors.Dvh_phone = "Số điện thoại không hợp lệ!";
    }
    setDvh_errors(errors);
    return Object.keys(errors).length === 0;
  };

  // Xử lý khi submit form
  const Dvh_handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Kiểm tra lỗi trước khi gửi dữ liệu
    console.log("Dvh_formData:", Dvh_formData);

    try {
      await DvhAxiosUsers.post("/Dvh_users", Dvh_formData);
      setDvh_alert({ type: "success", message: "Thêm user thành công!" });
      setTimeout(() => {
        setDvh_alert(null);
        navigate("/list-user");
      }, 1000);
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
      setDvh_alert({ type: "danger", message: "Lỗi khi thêm user!" });
      setTimeout(() => setDvh_alert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Form Thêm Mới User</h2>

      {Dvh_alert && (
        <div
          className={`alert alert-${Dvh_alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {Dvh_alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setDvh_alert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={Dvh_handleSubmit}>
        {/* Họ và Tên */}
        <div className="mb-3">
          <label htmlFor="Dvh_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${
              Dvh_errors.Dvh_name ? "is-invalid" : ""
            }`}
            id="Dvh_name"
            name="Dvh_name"
            value={Dvh_formData.Dvh_name}
            onChange={Dvh_handleChange}
            placeholder="Nhập họ và tên"
          />
          {Dvh_errors.Dvh_name && (
            <div className="invalid-feedback">{Dvh_errors.Dvh_name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="Dvh_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              Dvh_errors.Dvh_email ? "is-invalid" : ""
            }`}
            id="Dvh_email"
            name="Dvh_email"
            value={Dvh_formData.Dvh_email}
            onChange={Dvh_handleChange}
            placeholder="Nhập email"
          />
          {Dvh_errors.Dvh_email && (
            <div className="invalid-feedback">{Dvh_errors.Dvh_email}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="mb-3">
          <label htmlFor="Dvh_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${
              Dvh_errors.Dvh_phone ? "is-invalid" : ""
            }`}
            id="Dvh_phone"
            name="Dvh_phone"
            value={Dvh_formData.Dvh_phone}
            onChange={Dvh_handleChange}
            placeholder="Nhập số điện thoại"
          />
          {Dvh_errors.Dvh_phone && (
            <div className="invalid-feedback">{Dvh_errors.Dvh_phone}</div>
          )}
        </div>

        {/* Trạng thái */}
        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Dvh_active_true"
              name="Dvh_active"
              value="true"
              checked={Dvh_formData.Dvh_active === true}
              onChange={Dvh_handleChange}
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
              checked={Dvh_formData.Dvh_active === false}
              onChange={Dvh_handleChange}
            />
            <label className="form-check-label" htmlFor="Dvh_active_false">
              Khóa
            </label>
          </div>
        </div>

        {/* Nút Thêm Mới */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Thêm Mới
          </button>
        </div>
      </form>
    </div>
  );
}
