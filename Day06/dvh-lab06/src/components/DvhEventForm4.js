import React, { Component } from 'react'

 class DvhEventForm4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dvhSelectCheckBox: ["Apple"],
        };
    }
    
    // Hàm xử lý khi chọn checkbox
    dvhHandleSubmit = (ev) => {
        ev.preventDefault();
        alert(this.state.dvhName + "\n" + this.state.dvhAge);
        this.props.onDvhHandleSubmit(this.state);
    };
    
    dvhHandleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        this.setState(prevState => ({
            dvhSelectCheckBox: checked
                ? [...prevState.dvhSelectCheckBox, value]
                : prevState.dvhSelectCheckBox.filter(option => option !== value)
        }));
    };
    
    
    // Submit form
    dvhHandleSubmit = (ev) => {
        ev.preventDefault();
        alert("Select: " + this.state.dvhSelectCheckBox);
    };
    
    render() {
        return (
            <div className="alert alert-success">
                <h2>Form input - checkbox</h2>
                <form onSubmit={dvhHandleSubmit}>
                    <h3>Select your favorite fruits</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="apple"
                            value="Apple"
                            checked={this.state.dvhSelectCheckBox.includes("Apple")}
                            onChange={dvhHandleCheckboxChange}
                        />
                        <label htmlFor="apple">Apple</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="banana"
                            value="Banana"
                            checked={this.state.dvhSelectCheckBox.includes("Banana")}
                            onChange={dvhHandleCheckboxChange}
                        />
                        <label htmlFor="banana">Banana</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="orange"
                            value="Orange"
                            checked={this.state.dvhSelectCheckBox.includes("Orange")}
                            onChange={dvhHandleCheckboxChange}
                        />
                        <label htmlFor="orange">Orange</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }    
}


export default DvhEventForm4;
