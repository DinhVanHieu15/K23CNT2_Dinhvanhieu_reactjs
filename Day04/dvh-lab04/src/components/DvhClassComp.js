import React, { Component } from 'react'

class DvhClassComp extends Component {
    constructor(props){
        super(props)
        //Khởi tạo state
        this.state = {
            fullName: "Nguyễn Khánh",
            age:20,
            phone:"01234567"
        } 
    }
    //hàm xử lí sự kiện
     changeInfo = (ev)=>{
            //cập nhật state
            this.setState({
                fullName:"Đinh Văn Hiếu"
            });
    }
  render() {
        let user = this.props.renderUsers;
        console.log('==================================');
        console.log(user);
        console.log('==================================');
    return (
        <div className='alert alert-success'>
            <h2>Trình bày dữ liệu từ state</h2>
            <p>info state (fullName): {this.state.fullName}</p>
            <p>info state (age): {this.state.age}</p>
            <p>info state (fullName): {this.state.phone}</p>

            <hr/>
            <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
            <hr/>
            <h3>
                lấy dữ liệu từ props
            </h3>
            <p>Name: {user ? user.fullName : ""}</p>  {/* Changed 'users' to 'user' */}
            <p>FullName: {this.props.renderfullName}</p>
            <p>Age: {this.props.renderage}</p>
            <p>Phone: {this.props.renderphone}</p>
        </div>
    )
  }
}
export default DvhClassComp;
