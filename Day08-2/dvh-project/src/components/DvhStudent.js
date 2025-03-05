import React, { Component } from 'react'

class DvhStudent extends Component {
    constructor(props){
        super(props);
    }
    // hàm xử lí sự kiện

    dvhHandleView = (dvhStudent)=>{
        //Chuyển lên  DvhStudentList
        this.props.onDvhHandleView(dvhStudent);
    }
    render() {
        //lấy đối tượng dữ liệu chuyển từ DvhStudentList
        let {renderDvhStudent, key} = this.props;
        console.log("Student",renderDvhStudent);
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderDvhStudent.dvhId}</td>
                    <td>{renderDvhStudent.dvhStudentName}</td>
                    <td>{renderDvhStudent.dvhAge}</td>
                    <td>{renderDvhStudent.dvhGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.dvhHandleView(renderDvhStudent)} 
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
export default DvhStudent;