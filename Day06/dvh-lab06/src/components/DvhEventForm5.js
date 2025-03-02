import React, { Component } from 'react'

 class DvhEventForm5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dvhName: 'Chung',
            dvhAge: 45,
            dvhGender: 'Female',
            dvhCourse: 'CSS3'
        };
    }
    
    // Hàm xử lý sự kiện change
    dvhHandleChange = (event) => {
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;
    
        // Cập nhật state
        this.setState({
            [name]: value,
        });
    };
    
    // Sự kiện khi submit form
    dvhHandleSubmit = (ev) => {
        ev.preventDefault();
        alert(this.state.dvhName + "\n" + this.state.dvhAge);
    
        // Chuyển dữ liệu trên form lên App component (DvhApp);
        this.props.onDvhHandleSubmit(this.state);
    };
    
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='dvhName'>Student Name:</label>
                        <input type='text' name='dvhName' id='dvhName' 
                            value={this.state.dvhName}
                            onChange={this.dvhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dvhAge'>Student Age:</label>
                        <input type='text' name='dvhAge' id='dvhAge' 
                            value={this.state.dvhAge}
                            onChange={this.dvhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dvhGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='dvhGender' id='dvhMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.dvhGender === 'Male'}
                                onChange={this.dvhHandleChange} />
                            <label htmlFor='dvhMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='dvhGender' id='dvhFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.dvhGender === 'Female'}
                                onChange={this.dvhHandleChange} />
                            <label htmlFor='dvhFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='dvhGender' id='dvhNone' className='mx-2'
                                value={'None'}
                                checked={this.state.dvhGender === 'None'}
                                onChange={this.dvhHandleChange} />
                            <label htmlFor='dvhNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='dvhCourse'>
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
                    </div>
                    <button onClick={this.dvhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}   

export default DvhEventForm5;