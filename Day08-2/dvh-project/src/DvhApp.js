import React, { Component } from 'react'
import DvhControl from './components/DvhControl';
import DvhStudentList from './components/DvhStudentList';
import DvhForm from './components/DvhForm';

 class DvhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      dvhstudents:[
        {dvhId:"SV001",dvhStudentName:"Đinh Văn Hiếu",dvhAge:20,dvhGender:"Nam",dvhBirthday:"15/08/2005",dvhBirthaPlace:"HH",dvhAddress:"Bắc Giang"},
        {dvhId:"SV002",dvhStudentName:"Nguyễn Đức Thành",dvhAge:20,dvhGender:"Nam",dvhBirthday:"15/08/2005",dvhBirthaPlace:"BN",dvhAddress:"Bắc Ninh"},
        {dvhId:"SV003",dvhStudentName:"Nguyễn Đức Duy",dvhAge:20,dvhGender:"Nam",dvhBirthday:"15/08/2005",dvhBirthaPlace:"HN",dvhAddress:"Hà Nội"},
        {dvhId:"SV003",dvhStudentName:"Phạm Thanh Thảo",dvhAge:20,dvhGender:"Nữ",dvhBirthday:"15/08/2005",dvhBirthaPlace:"HP",dvhAddress:"Hàỉ Phòng"}    

      ],
      dvhStudent:"",
    }
  }

  // hàm xử lí sự kiện view student
  dvhHandleView = (dvhStudent)=>{
    this.setState({
      dvhStudent:dvhStudent,
    })
  }
  render() {
    //log
    console.log("View Student:",this.state.dvhStudent);
    return (
      <div>
        <h1 className='text center'> Đinh Văn hiếu - K23CNT2 - Mini Project</h1>
        <section className="container-fluid mt-3">
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
       


        {/*header */}

        <DvhControl />
        {/* danh sách sinh viên */}
        <DvhStudentList renderDvhStudens={this.state.dvhstudents} onDvhHandleView={this.dvhHandleView} />
      </div>
    </div>
    <div className="col-5 grid-margin">

   {/* from   */}
   <DvhForm renderDvhStudent = {this.state.dvhStudent}/>
    </div>
  </div>
</section>

      </div>
    )
  }
}
export default DvhApp;