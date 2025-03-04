import React, { Component } from 'react'
import DvhLoginComp from './DvhLoginComp';
import DvhLogoutComp from './DvhLogoutComp';
 class DvhLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
     // Hàm xử lý sự kiện login
        DvhHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
  render() {
    let {isLoggedIn}=this.state
        let Dvhlement = isLoggedIn?<DvhLoginComp/> : <DvhLogoutComp/>
    return (
      <div  className='alert alert-danger'>
          {Dvhlement}
          {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.DvhHandleLogin}>Login</button>
                }
      </div>
    )
  }
}
export default DvhLoginControl;