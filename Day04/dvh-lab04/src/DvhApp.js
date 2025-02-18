import DvhClassComp from "./components/DvhClassComp";
import DvhFuncComp from "./components/DvhFuncComp";
import DvhFuncComp1 from "./components/DvhFuncComp1";


function DvhApp() {
  //object
  const user ={
    fullName: 'Phạm Thanh Thảo',
    age: 20,
    phone: "01234567"
  }
  return (
    <div className="container border mt -3">
      <h1>Demo Component - Prop - State</h1>
      <hr/>
      <div className='alert alert-danger'>
       <DvhFuncComp name="Dinh Hieu" address="Mậu Lương kiến Hưng" company="Devmaster"/>
       <hr/>
       <DvhFuncComp name="Nguyễn Đức Thành" address="Bắc Ninh" company="NTU"/>
      </div>
      <div className='alert alert-info'>
        <DvhFuncComp1 renderInfo={user}/>
      </div>
      <hr/>
      <DvhClassComp/>
      {/*Chuyển kiểu dữ liệu từ DvhApp -> DvhClassComp */}
      <DvhClassComp renderName="K23CNT2" renderUser={user}/>
    </div>
  );
}

export default DvhApp;
