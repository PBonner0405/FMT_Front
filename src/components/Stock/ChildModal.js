import React from 'react';

class InformType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:'',
            date:''
        }
    }
    handleDateChange(event)
    {
        this.setState({ date: event.target.value });
    }
    handlePriceChange(event)
    {
        this.setState({ price: event.target.value });
    }

    render(){
        return(
            <div class="row">
                <div class="d-flex mb-3 col-md-4 offset-md-2">
                    <p>Date</p>
                    <input type="date" class="form-control" required placeholder="05-03-2019" onChange={this.handleDateChange.bind(this)}/>
                </div>
                <div class="d-flex mb-3 col-md-4">
                    <p>Price ($)</p>
                    <input type="number" step="0.001" class="form-control" required placeholder="0" onChange={this.handlePriceChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default InformType;