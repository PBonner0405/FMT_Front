import React from 'react';
import InformType from './InformType';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inform:[]
        }
    }
    addStock(event){
        event.preventDefault();
        const inform = this.state.inform;
        this.setState({
            inform: inform.concat(<InformType/>)
        })
    }
    sendStock(){
        this.state.inform.map(function(input){
            
        })
        console.log("I am here",this.state.inform);
    }
    clearModal(){
        this.setState({
            inform:[<InformType/>,]
        });
    }

    render(){
        return(
            <div class="modal fade" id="StockModal" >
                <div class="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:'1300px'}}>
                    <div class="modal-content">
                        <form onSubmit={this.sendStock.bind(this)}>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Add Stock</h5>
                            </div>
                            <div class="modal-body" style={{padding:'50px'}}>
                                    <div class="d-flex col-md-8" style={{margin:'auto', marginBottom:'40px'}}>
                                        <p>Stock Name</p>
                                        <input type="text" class="form-control" required/>
                                    </div>
                                    {this.state.inform.map(function(input){
                                        return input;
                                    })}
                                    <button className="btn btn-info text-center" onClick={this.addStock.bind(this)}>Add More</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" type="submit">Save</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;