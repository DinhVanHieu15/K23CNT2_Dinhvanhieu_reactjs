import React, { Component } from 'react'

 class DvhEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            dvhCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    dvhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            dvhCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    tvcHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.dvhCourse);
        event.preventDefault();
    }
  render() {
    return (
        <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='dvhCourse' id='dvhCourse' 
                            value={this.state.dvhCourse}
                            onChange={this.dvhHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.dvhHandleSubmit}>Click here</button>
                </form>
            </div>
    )
  }
}
export default DvhEventForm2;