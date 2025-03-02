import React, { Component } from 'react'

 class DvhEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dvhGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    dvhHandleChange = (event)=>{
        this.setState({
            dvhGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    dvhHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.dvhGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='dvhGioiTinh'  id='dvhNam' className='mx-2'
                            value="Nam" checked={this.state.dvhGioiTinh === 'Nam'} onChange={this.dvhHandleChange}/> 
                            <label htmlFor='dvhNam'>Nam</label>  
                        <input type='radio' name='dvhGioiTinh'  id='dvhNu' className='mx-2'
                            value="Nữ" checked={this.state.dvhGioiTinh === 'Nữ'} onChange={this.dvhHandleChange}/> 
                            <label htmlFor='dvhNu'>Nữ</label>  
                        <input type='radio' name='dvhGioiTinh' id='dvhKhac' className='mx-2'
                            value="Khác" checked={this.state.dvhGioiTinh === 'Khác'} onChange={this.dvhHandleChange}/> 
                            <label htmlFor='dvhKhac'>Khác</label>
                    </div>
                    <button onClick={this.dvhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
  }
}

export default DvhEventForm3;
