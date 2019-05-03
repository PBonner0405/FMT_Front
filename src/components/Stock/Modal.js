import React from 'react';
import InformType from './InformType';
import Axios from 'axios';


class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inform:[],
            stockname:''
        }
        this.ref_infos = [];
    }
    addStock(event){
        event.preventDefault();
        const inform = this.state.inform;
        this.setState({
            inform: inform.concat(<InformType ref={(ref) => this.ref_infos = [...this.ref_infos, ref] }/>)
        })
    }
    sendStock(e){
        e.preventDefault();
        var hisarr = [];
        this.ref_infos.map(function(object, index){
            hisarr.push(object.state);
        })
        Axios({
            method: 'POST',
            url: "http://192.168.1.120:8000/api/addnewstock",
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              _name:this.state.stockname,
              _histArray:hisarr,
              _username:"testuser"
            }
          })
            .then(res => {
              alert("CONGRATULATION");
            })
            .catch(err => {
              console.log(err);
            });
    }
    clearModal(){
        this.ref_infos = [];
        this.setState({
            inform:[<InformType ref={(ref) => this.ref_infos = [...this.ref_infos, ref]}/>,]
        });
    }
    handleStocknameChnage(event){
        this.setState({stockname:event.target.value});
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
                                        <input type="text" class="form-control" required onChange={this.handleStocknameChnage.bind(this)}/>
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