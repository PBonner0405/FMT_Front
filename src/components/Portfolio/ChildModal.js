import React from 'react';
import Select from 'react-select';

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '100%',
    })
};
const buyoptions=[
    {label:'Buy', value:'buy'},
    {label:'Sell', value:'sell'}
]
class ChildModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stockName:'',
            CNT:'',
            buy:true,
            date:'',
            price:''
        }
    }

    handleStockChange(event){
        this.setState({ stockName: event.value});
    }
    handleCountChange(event){
        this.setState({ CNT: event.target.value });
    }
    handleDateChange(event){
        this.setState({ date: event.target.value });
    }
    handlePriceChange(event){
        this.setState({ price: event.target.value });
    }
    handleSelectChange(event){
        if(event.value === 'buy')
            this.setState({buy:true});
        else
            this.setState({buy:false});
    }
    render(){
        return(
            <div class="row">
                <div class="col-md-2">
                <Select
                      onChange={this.handleSelectChange.bind(this)}
                      options={buyoptions}
                      styles={customStyles}
                      placeholder="Buy Or Sell"
                      required
                    />
                </div>
                <div class="d-flex mb-3 col-md-3">
                    <p class="mt-1">Stock</p>
                    <Select
                      onChange={this.handleStockChange.bind(this)}
                      options={this.props.options}
                      styles={customStyles}
                      placeholder="Select Stock..."
                      required
                    />
                </div>
                <div class="d-flex mb-3 col-md-3">
                    <p class="mt-1">Date</p>
                    <input type="date" class="form-control" required placeholder="05-03-2019" onChange={this.handleDateChange.bind(this)}/>
                </div>
                <div class="d-flex mb-3 col-md-2">
                    <p class="mr-3 mt-1">Count</p>
                    <input type="number" class="form-control" required placeholder="0" onChange={this.handleCountChange.bind(this)}/>
                </div>

                <div class="d-flex mb-3 col-md-2">
                    <p class="mr-3 mt-1">Price($)</p>
                    <input type="number" class="form-control" required placeholder="0" onChange={this.handlePriceChange.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default (ChildModal);