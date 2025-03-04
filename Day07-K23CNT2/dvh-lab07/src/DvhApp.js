import React, { Component } from 'react'
import DvhLoginControl from './components/DvhLoginControl';
import DvhRenderList from './components/DvhRenderList';
import DvhRenderListStudent from './components/DvhRenderListStudent';

class DvhApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Đinh Văn Hiếu - Render condition, List key</h1>
        <hr/>
        <DvhLoginControl/>

        <DvhRenderList/>

        <DvhRenderListStudent/>
      </div>
    )
  }
}

export default DvhApp;