import React from 'react';
import Select from 'react-select';

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '100%',
    })
};
class ChildModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stockName:'',
            CNT:'',
        }
    }

    handleStockChange(event)
    {
        this.setState({ stockName: event.value});
    }
    handleCountChange(event)
    {
        this.setState({ CNT: event.target.value });
    }
    render(){
        return(
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="d-flex mb-3 col-md-4">
                    <p>Stock</p>
                    <Select
                      onChange={this.handleStockChange.bind(this)}
                      options={this.props.options}
                      styles={customStyles}
                    />
                </div>
                <div class="d-flex mb-3 col-md-4">
                    <p>Count</p>
                    <input type="number" class="form-control" required placeholder="0" onChange={this.handleCountChange.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default (ChildModal);