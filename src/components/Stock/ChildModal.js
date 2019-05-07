import React from 'react';

class InformType extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:'',
            profit:'',
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
    handleProfitChange(event)
    {
        this.setState({ profit: event.target.value });
        
    }
    render(){
        return(
            <div class="row">
                <div class="d-flex mb-3 col-md-4">
                    <p>Date</p>
                    <input type="date" class="form-control" required placeholder="05-03-2019" onChange={this.handleDateChange.bind(this)}/>
                </div>
                <div class="d-flex mb-3 col-md-4">
                    <p>Price ($)</p>
                    <input type="number" class="form-control" required placeholder="0" onChange={this.handlePriceChange.bind(this)}/>
                </div>
                <div class="d-flex mb-3 col-md-4">
                    <p>Profit (%)</p>
                    <input type="number" class="form-control" required placeholder="0" onChange={this.handleProfitChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default InformType;