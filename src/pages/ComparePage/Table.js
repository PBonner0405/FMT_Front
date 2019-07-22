import React from 'react';
import MaterialTable from 'material-table';
import cookieRead from '../../browser/cookieRead';
import Axios from 'axios';
import APIPath from '../../components/api.js';

import {connect} from 'react-redux';
import {getStock, getPortfolio} from '../../actions';

class MTable extends React.Component{
  constructor(props){
	super(props)
	this.state = {
		columns:[],
		data:[]
	}
	this.editRecord = this.editRecord.bind(this);
	this.addRecord = this.addRecord.bind(this);
	this.deleteRecord = this.deleteRecord.bind(this);
	this.InitializeData = this.InitializeData.bind(this);
	}

	componentWillReceiveProps(newProps) {
		console.log('Component WILL UPDATE!:PROPS',newProps);
		this.InitializeData(newProps);
		return true;
	}
	componentDidMount(){
		this.InitializeData(this.props);
	}
	InitializeData(props){
			
		var jsonST, jsonPF;
		
		jsonST = props.stocks;
		jsonPF = props.portfolios;
		if(jsonPF.length === 0 | jsonST.length === 0)
			return;
		console.log("This is Table!!!!!!!!!!!!!!!!!!!!!");
		console.log("I am stocks",jsonST);
		console.log("I am portfolios",jsonPF);
		
		
		var lookupST = {};
		jsonST.map((iST, indexST) => {
			lookupST[indexST.toString()] = iST.stockName;
		})

		var columns = [
			{
				title: 'Stock',
				field: 'stock',
				lookup: lookupST
			},
			{ title: 'Date', field: 'date'},
			{ title: 'Quantity', field: 'quantity', type: 'numeric'},
			{ title: 'Price', field: 'price', type: 'numeric'},
			{
				title: 'Option',
				field:'buy',
				lookup: {true: 'Buy', false: 'Sell'}
			},
		];

		

		var tableData = [];
		const currentPF = jsonPF.find(e => e.title === this.props.title);
		currentPF.stocks.map((iST) => {
			var data = {};
			data["buy"] = iST.buy;
			data["quantity"] = iST.cnt;
			data["date"] = iST.date;
			data["price"] = iST.price;
			data["stock"] = jsonST.findIndex(e => e.stockName === iST.stock);
			tableData.push(data);
		})

		this.setState({columns:columns, data:tableData, jsonST:jsonST});
	}
  editRecord(data){
	const username = cookieRead('username');
	var stockinfo = {
		stock: this.state.jsonST[parseInt(data.stock)].stockName,
		shares: parseInt(data.quantity),
		buy: data.buy,
		date: data.date,
		price: parseFloat(data.price),
		index:data.tableData.id
	}
	Axios({
		method: 'POST',
		url: APIPath + "/api/editPortfolio",
		headers: {
			'Content-Type': 'application/json'
		},
		data: {
			_username:username,
			_title:this.props.title,
			_cmd:3,
			_data:stockinfo,
			
		}
		})
		.then(res => {
			console.log(res);
			
			const username = cookieRead('username');

			this.props.getStock(username);
			this.props.getPortfolio(username);
			window.location.reload();
		})
		.catch(err => {
			console.log(err);
		});

  }
  addRecord(data){
	const username = cookieRead('username');
	var stockinfo = {
		stock: this.state.jsonST[parseInt(data.stock)].stockName,
		shares: parseInt(data.quantity),
		buy: data.buy,
		date: data.date,
		price: parseFloat(data.price),
	}
	Axios({
		method: 'POST',
		url: APIPath + "/api/editPortfolio",
		headers: {
			'Content-Type': 'application/json'
		},
		data: {
			_username:username,
			_title:this.props.title,
			_cmd:1,
			_data:stockinfo,
			
		}
		})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
  }

  deleteRecord(data){
	const username = cookieRead('username');
	var stockinfo = {
		stock: this.state.jsonST[parseInt(data.stock)].stockName,
		index:data.tableData.id
	}
	Axios({
		method: 'POST',
		url: APIPath + "/api/editPortfolio",
		headers: {
			'Content-Type': 'application/json'
		},
		data: {
			_username:username,
			_title:this.props.title,
			_cmd:2,
			_data:stockinfo,
			
		}
		})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
  }
  render(){
    return (
	
      <MaterialTable
        title={this.props.title}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.push(newData);
				this.setState({ ...this.state, data });
				this.addRecord(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data[data.indexOf(oldData)] = newData;
                this.setState({ ...this.state, data });
				console.log(newData);
				this.editRecord(newData);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
				data.splice(data.indexOf(oldData), 1);
				this.deleteRecord(oldData);
                this.setState({ ...this.state, data });
              }, 600);
            }),
        }}
      />
    );
  }
  
}
const mapStateToProps = (state) => {
    const stocks =  state.inform.stocks === undefined ? [] : state.inform.stocks;
	const portfolios =  state.inform.portfolios === undefined ? [] : state.inform.portfolios;
	console.log("TABLEMAPSTATE", state.inform.stocks, state.inform.portfolios);
    return {stocks:stocks, portfolios:portfolios};
}

export default connect(mapStateToProps, { getStock,getPortfolio})(MTable);