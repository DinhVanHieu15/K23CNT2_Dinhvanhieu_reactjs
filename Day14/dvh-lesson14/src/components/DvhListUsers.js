import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DvhAxiosUsers from '../api/Dvh_api';

export default function DvhListUsers() {
  const navigate = useNavigate();
  const [DvhListUser, setDvhListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null); // State for custom alerts

  const DvhGetAllUser = async () => {
    setIsLoading(true);
    try {
      const DvhResp = await DvhAxiosUsers.get('/dvh_users');
      setDvhListUser(DvhResp.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    DvhGetAllUser();
  }, []);

  const DvhHandleUpdate = (DvhId) => {
    console.log('id:', DvhId);
    navigate(`/edit-user/${DvhId}`);
    setAlert({ type: 'success', message: 'Đã chuyển đến trang cập nhật!' });
    setTimeout(() => setAlert(null), 3000); // Auto-dismiss after 3 seconds
  };

  const DvhHandleDelete = async (DvhId) => {
    if (window.confirm('Bạn có chắc muốn xóa user này không?')) {
      try {
        await DvhAxiosUsers.delete(`/dvh_users/${DvhId}`);
        setDvhListUser(DvhListUser.filter((x) => x.id !== DvhId));
        setAlert({ type: 'danger', message: 'Đã xóa user thành công!' });
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error('Error deleting user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi xóa user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  const DvhElementUser = DvhListUser.map((DvhUser) => (
    <tr key={DvhUser.id}>
      <td>{DvhUser.id}</td>
      <td>{DvhUser.dvh_name}</td>
      <td>{DvhUser.dvh_email}</td>
      <td>{DvhUser.dvh_phone}</td>
      <td>
        <span
          className={`badge ${
            DvhUser.dvh_active ? 'bg-success' : 'bg-danger'
          }`}
        >
          {DvhUser.dvh_active ? 'Hoạt động' : 'Khóa'}
        </span>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => DvhHandleUpdate(DvhUser.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => DvhHandleDelete(DvhUser.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách User</h2>

      {/* Custom Alert */}
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

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p>Đang tải...</p>
        </div>
      ) : DvhListUser.length === 0 ? (
        <p className="text-center text-muted fst-italic">Không có dữ liệu để hiển thị.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{DvhElementUser}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
