import React from 'react';
import ChildModal from './ChildModal';
import Axios from 'axios';
import cookieRead from '../../browser/cookieRead';
import {connect} from 'react-redux';
import APIpath from '../api.js';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inform:[],
            pTitle:'',
            pComment:'',
            cnt:100,
            options:[],
            pCash:0
            
        }
        console.log("Before", this.props);
        this.ref_infos = [];
    }
    componentDidMount(){
        var options=[];
        let {list} = this.props;
        list.map(i=>
            options.push({value:i.stockName, label:i.stockName}),
        )
        this.state.options = options;
        console.log("STATE1", this.state);
    }
    addStock(event){
        event.preventDefault();
        const inform = this.state.inform;
        this.Addcount();
        console.log(this.ref_infos, "REFFFFFF2");

        this.setState({
            inform: inform.concat(<ChildModal options = {this.state.options} key = {this.state.cnt} ref={(ref) => this.ref_infos = [...this.ref_infos, ref] }/>)
        })
    }
    sendStock(event){
        var hisarr = [];
        console.log("REFINFOS", this.ref_infos);
        this.ref_infos.map(function(object, index){
            if(object != null || object != undefined)
            hisarr.push(object.state);
        })
        const username = cookieRead('username');
        var today = new Date(),
            date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        console.log("Send Data:",username,this.state.pTitle,this.state.pComment, hisarr,date);
        Axios({
            method: 'POST',
            url: APIpath + '/api/addPortfolio',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              _username:username,
              _title:this.state.pTitle,
              _comment:this.state.pComment,
              _cash:this.state.pCash,
              _stockArray:hisarr,
              _date:date
            }
          })
            .then(res => {
                
            })
            .catch(err => {
              console.log(err);
            });
        
    }
    Addcount(){
        const cnt = this.state.cnt + 1;
        this.setState({
            cnt:cnt
        })
    }
    clearModal(){

        this.ref_infos = [];
        this.Addcount();
        this.componentDidMount();
        this.setState({
            inform: [<ChildModal options = {this.state.options} key={this.state.cnt} ref={(ref) => this.ref_infos = [...this.ref_infos, ref] }/>],
            pTitle:'',
            pComment:'',
            pCash:0
        })
        
    }
    handleTitleChange(event){
        this.setState({pTitle:event.target.value});
    }
    handleCommentChange(event){
        this.setState({pComment:event.target.value});
    }
    handleCashChange(event){
        this.setState({pCash:event.target.value})
    }
    render(){
        return(
            <div class="modal fade" id="PortfolioModal" >
                <div class="modal-dialog modal-dialog-centered" style={{maxWidth:'1300px'}}>
                    <div class="modal-content">
                        <form onSubmit={this.sendStock.bind(this)}>
                            <div class="modal-header">
                                <h5 class="modal-title" >Add Portfolio</h5>
                            </div>
                            <div class="modal-body" style={{padding:'50px'}}>
                                    <div class="d-flex col-md-6" style={{margin:'auto', marginBottom:'40px'}}>
                                        <p className='text-right-align'>Title</p>
                                        <input type="text" class="form-control" required value={this.state.pTitle} onChange={this.handleTitleChange.bind(this)}/>
                                    </div>
                                    <div class="d-flex col-md-6" style={{margin:'auto', marginBottom:'40px'}}>
                                        <p className='text-right-align'>Comment</p>
                                        <textarea class="form-control" rows="5" id="comment" required value={this.state.pComment} onChange={this.handleCommentChange.bind(this)}></textarea>
                                    </div>
                                    <div class="d-flex col-md-6" style={{margin:'auto', marginBottom:'40px'}}>
                                        <p className='text-right-align'>Cash</p>
                                        <input type="number" class="form-control" required placeholder="0" onChange={this.handleCashChange.bind(this)}/>
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
const mapStateToProps = (state) => {
    return state.inform.stocks === undefined ? {list:[]} : {list:state.inform.stocks};
}

export default connect(mapStateToProps,null,null, {forwardRef:true})(Modal);