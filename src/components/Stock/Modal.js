import React from 'react';
import InformType from './ChildModal';
import Axios from 'axios';
import cookieRead from '../../browser/cookieRead';
import APIPath from '../api.js';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inform:[],
            stockname:'',
            cnt:0
            
        }
        this.ref_infos = [];
    }
    Addcount(){
        const cnt = this.state.cnt + 1;
        this.setState({
            cnt:cnt
        })
    }

    addStock(event){
        event.preventDefault();
        const inform = this.state.inform;
        this.Addcount();
        this.setState({
            inform: inform.concat(<InformType key = {this.state.cnt} ref={(ref) => this.ref_infos = [...this.ref_infos, ref] }/>)
        })
    }
    sendStock(event){
        var hisarr = [];
        this.ref_infos.map(function(object, index){
            if(object != null || object != undefined)
            hisarr.push(object.state);
        })
        const username = cookieRead('username');
        Axios({
            method: 'POST',
            url: APIPath + "/api/addnewstock",
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              _name:this.state.stockname,
              _histArray:hisarr,
              _username:username
            }
          })
            .then(res => {
                console.log(res);
                
            })
            .catch(err => {
              console.log(err);
            });
        
    }
    clearModal(){
        this.ref_infos = [];
        this.state.stockname='';
        console.log(this.state);
        this.Addcount();
        this.setState({
            inform:[<InformType key = {this.state.cnt} ref={(ref) => this.ref_infos = [...this.ref_infos, ref]}/>,]
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
                                        <input type="text" class="form-control" required value={this.state.stockname} onChange={this.handleStocknameChnage.bind(this)}/>
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