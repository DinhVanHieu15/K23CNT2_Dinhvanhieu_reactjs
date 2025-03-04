import React, { Component } from 'react'

 class DvhRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DvhStudents: [
                { DvhId: "NTU001", DvhName: "Trịnh Văn Chung", DvhAge: 46, DvhClass: "K23CNT2" },
                { DvhId: "NTU002", DvhName: "Nguyễn Quang A", DvhAge: 22, DvhClass: "K23CNT2" },
                { DvhId: "NTU003", DvhName: "Nguyễn Quang B", DvhAge: 21, DvhClass: "K23CNT2" },
                { DvhId: "NTU004", DvhName: "Nguyễn Quang C", DvhAge: 23, DvhClass: "K23CNT2" },
            ],
        }
    }
    
    handleEdit = (id) => {
        console.log("Edit student with id:", id);
        // Add logic for editing a student
    }
    
    handleDelete = (id) => {
        this.setState(prevState => ({
            DvhStudents: prevState.DvhStudents.filter(student => student.DvhId !== id)
        }));
        console.log("Deleted student with id:", id);
    }
    
    render() {
        let DvhElement = this.state.DvhStudents.map((DvhItem, index) => {
            return (
                <tr key={DvhItem.DvhId}>
                    <td>{index + 1}</td>
                    <td>{DvhItem.DvhId}</td>
                    <td>{DvhItem.DvhName}</td>
                    <td>{DvhItem.DvhAge}</td>
                    <td>{DvhItem.DvhClass}</td>
                    <td>
                        <button onClick={() => this.handleEdit(DvhItem.DvhId)}>Sửa</button>
                        <button onClick={() => this.handleDelete(DvhItem.DvhId)}>Xóa</button>
                    </td>
                </tr>
            )
        });
    
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>DvhId</th>
                            <th>DvhName</th>
                            <th>DvhAge</th>
                            <th>DvhClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DvhElement}
                    </tbody>
                </table>
            </div>
        );
    }
   
}
export default DvhRenderListStudent;