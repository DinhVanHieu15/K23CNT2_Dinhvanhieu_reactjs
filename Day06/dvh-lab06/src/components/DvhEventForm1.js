import React, { Component } from 'react'

 class DvhEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dvhStudentName:'Đinh Văn Hiếu',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (dvhStudentName) thay đổi
    dvhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            dvhStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    dvhHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.dvhStudentName);
        ev.preventDefault();
    }
  render() {
    return (
           <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.dvhHandleSubmit}>
                    <label htmlFor='dvhStudentName'>
                        <input type='text' name='dvhStudentName' id='dvhStudentName' 
                            value={this.state.dvhStudentName}
                            onChange={this.dvhHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
    )
  }
}
export default DvhEventForm1;