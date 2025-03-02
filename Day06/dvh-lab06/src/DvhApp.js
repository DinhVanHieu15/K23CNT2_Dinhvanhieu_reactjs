import React, { Component } from 'react'
import DvhEventForm2 from './components/DvhEventForm2';
import DvhEventForm3 from './components/DvhEventForm3';
import DvhEventForm4 from './components/DvhEventForm4';
import DvhEventForm5 from './components/DvhEventForm5';
import DvhEventForm1 from './components/DvhEventForm1';

 class DvhApp extends Component {

  dvhHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }
  render() {
    return (
      <div className='container border my-m bg-white'>
         <h1 className='text-center'> Event - From - Demo </h1>
         <hr/>
         <DvhEventForm1/>
         <DvhEventForm2/>
         <DvhEventForm3/>
         <DvhEventForm4/>
         <DvhEventForm5 onDvhHandleSubmit={this.dvhHandleSubmitForm}/>
      </div>
    )
  }
}
export default DvhApp;
