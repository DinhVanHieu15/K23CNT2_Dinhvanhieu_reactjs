import React, { Component } from 'react'
import DvhStudent from './DvhStudent';

class DvhStudentList extends Component {
    constructor(props) {
        super(props);

    }
        //hàm  xử lý sự kiện xem
        dvhHandleView = (dvhStudent)=>{
            //chuyển dữ liệu  lên DvhApp
            this.props.onDvhHandleView(dvhStudent);
        }
    render() {
        // lấy dữ liệu từ trong prop từ DvhApp Chuyển xuống
        let {renderDvhStudens} = this.props;
        console.log("List:",renderDvhStudens);

        //chuyển dữ liệu vào DvhStudent để hiển thị
        let dvhElementStudent = renderDvhStudens.map((dvhItem,index)=>{
            return  <DvhStudent key={index} renderDvhStudent ={dvhItem} onDvhHandleView={this.dvhHandleView}/>
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>

                            {dvhElementStudent}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default DvhStudentList;