import React from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Select from 'react-select';
import {connect} from 'react-redux';
import AmCharts from "@amcharts/amcharts3-react";

import cookieRead from '../../browser/cookieRead';

  const customStyles = {
    container: (provided) => ({
      ...provided,
	  width: '100%',
	  margin:'auto',
	  marginTop:'20px'
    })
  };

class Graph extends React.Component{
    constructor(props){
		super(props);
		this.state={
			dataProvider:[],
			graph:[],
		}
	}

	componentDidMount(){
		console.log("I am graph!!!!!!!!!!!!!!!!!!!!!!!!!!");
		var options = [];

		var json_str = cookieRead('portfolios');
		var jsonPF = JSON.parse(json_str);
		var jsonPF1 = [{
			comment: "Amazing Marketing",
			date: "2019-07-08T04:00:00.000Z",
			likes: 0,
			title: "PortFoA",
			stocks:[
				{	
					buy: true,
					cnt: "1000",
					date: "2019-01-01",
					stock: "ProA",
					price: "25"
				},
				{
					buy: false,
					cnt: "1000",
					date: "2019-07-01",
					stock: "ProA",
					price: "25"
				},
				{
					buy: true,
					cnt: "50",
					date: "2019-04-01",
					stock: "ProB",
					price: "25"
				},
				{
					buy: true,
					cnt: "100",
					date: "2019-09-01",
					stock: "ProB",
					price: "25"
				},
				{
					buy: false,
					cnt: "150",
					date: "2019-12-31",
					stock: "ProB",
					price: "25"
				}
			]
		}]
		console.log(this.props.title);
		console.log("Portfolios",jsonPF);
		const currentPF = jsonPF.find(e => e.title === this.props.title);
		var jsonST;
		json_str = cookieRead('stocks');
		jsonST = JSON.parse(json_str);
		console.log("STOCKS",jsonST);

		jsonPF.map((iPF) => {
			iPF.stocks.map((iST, indST) => {
				var index = -1;
				var findST = jsonST.find(function(item, i){
					if(item.stockName === iST.stock){
						index = i;
					}
				})
				console.log("------------",index);
				if(index != -1)
					jsonST[index].shistory.push(iST);
			})
		})
		var length = jsonST.length;
		for(var i = 0; i < length; i ++){
			jsonST[i].shistory.sort((a,b) => Date.parse(a.date) - Date.parse(b.date))
		}
		console.log("New Stocks",jsonST);
		/**					CREATE ENGINE			 */

		var arr_date = [];
		var arr_ST = [];
		var arr_infoST = [];
		currentPF.stocks.map((iPF, index) => {
			if(!arr_infoST.find(e => e === iPF.stock))
			{
				const findST = jsonST.find(e => e.stockName === iPF.stock);
				console.log("FindST:",findST);
				findST.shistory.map((iHis) => {
					if(!arr_date.find(e => Date.parse(e) === Date.parse(iHis.date)))
						arr_date.push(iHis.date);
				})
				arr_ST.push(findST);
				arr_infoST.push(iPF.stock);
			}
		})
		console.log("Array_ST, Array_infoST", arr_ST,arr_infoST);
		arr_date.sort((a,b) => Date.parse(a) - Date.parse(b))
		var arr_price = [];
		console.log("date",arr_date);
		
		arr_ST.map((iST,indST) => {
			var cnt = 0;
			arr_price[indST] = new Array;
			let price = 0;

			arr_date.map(index => {
				if(Date.parse(index) === Date.parse(iST.shistory[cnt].date)){
					price = iST.shistory[cnt].price;
					if(cnt !== iST.shistory.length -1)
						cnt ++;
				}
				arr_price[indST].push(price);
			})
		})
		console.log("ARRPRICE",arr_price);
		var arr_PNL = [];
	
		arr_ST.map((iST, indST) => {
			var arr_buy = [];
			var sell_flag = false;
			arr_PNL[indST] = new Array;

			arr_date.map((iDate,indDT) => {
				const findST = currentPF.stocks.find(e => Date.parse(e.date) === Date.parse(iDate) && e.stock === iST.stockName);
				var pnl = 0;
				console.log("findST:",findST);
				if(findST)
				{
					if(findST.buy === true){
						arr_buy.push({quantity:findST.cnt, price:arr_price[indST][indDT]});
						sell_flag = false;
					}
				}
				if(sell_flag)
					pnl = arr_PNL[indST][indDT - 1]
				arr_buy.map((iBuy) => {
					pnl += (arr_price[indST][indDT] - iBuy.price) * iBuy.quantity;
				})
				arr_PNL[indST].push(pnl);

				if(findST && findST.buy === false){
					arr_buy = [];
					sell_flag = true;
				}
			})
		})
		console.log("ARRAY_PNL:",arr_PNL);

		var arr_TPNL = [];
		arr_date.map((iDate,indDT) => {
			var sum = 0;
			arr_ST.map((iST, indST) => {
				sum += arr_PNL[indST][indDT];
			})
			arr_TPNL.push(sum);
		})
		// jsonPF.map((iport,indexpf ) => {
		// 	sum_array[indexpf] = new Array;
		// 		arr_date.map((i, index) => {
		// 			sum_array[indexpf][index] = 0;
		// 			iport.stocks.map((temp) => {
		// 				var stIndex = jsonST.findIndex(e => e.stockName === temp.stock);
		// 				sum_array[indexpf][index] += arr_stocks[stIndex][index] * temp.cnt;
		// 			})
		// 			// arr_stocks.map(profit => {
		// 			// 	sum_array[index] += profit[index];
		// 			// })
		// 			// this.state.data.push({
		// 			// 	name:Date.parse(i),
		// 			// 	portfolio:sum_array[index]
		// 			// })
		// 		})
		// })

		var CData = [];
		arr_date.map((iDT, indDT) => {
			var data = {};
			data['date'] = iDT;
			arr_ST.map((iST, indST) => {
				data[iST.stockName] = arr_PNL[indST][indDT]
			})
			data['TotalPNL'] = arr_TPNL[indDT];
			data['Profit'] = arr_TPNL[indDT] / 50;
			CData.push(data);
		})
		var arr_graph = [];
		arr_infoST.map((iStockName) => {
			arr_graph.push(this.makeGraphData(iStockName))
		})
		arr_graph.push(this.makeGraphData('TotalPNL'));

		this.setState({	dataProvider: CData,
						selectOptions:[{value:'PNL',label:'PNL'},{value:'Profit',label:'Profit'}],
						arr_infoST:arr_infoST,
						graph:arr_graph
						});
		
		console.log("CREATE ENGINE FINAL DATA",this.state);

	}
    OptionChange = (event) => {
		var graph;
		if(event.value == 'PNL')
			graph = this.setGraph('PNL')
		if(event.value == 'Profit')
			graph = this.setGraph('Profit')
		this.setState({graph:graph});
	}
	makeGraphData(name){
		var graph = new AmCharts.AmGraph();
		graph.title= name;
		graph.valueField= name;
		graph.lineThickness = 2;
		graph.balloonText = "[[title]]: [[value]]";
		graph.bullet = "round";
		graph.bulletBorderAlpha = 1;
		graph.bulletColor = "#FFFFFF";
		graph.bulletSize = 5;
		graph.hideBulletsCount = 50;
		graph.useLineColorForBulletBorder = true;
		return graph;
	}
	setGraph(selectedOption){
		switch(selectedOption){
			case 'Profit':
				var arr_graph = [];
				arr_graph.push(this.makeGraphData('Profit'));
				return arr_graph;
			case 'PNL':
				var arr_graph = [];
				this.state.arr_infoST.map((iStockName) => {
					arr_graph.push(this.makeGraphData(iStockName))
				})
				arr_graph.push(this.makeGraphData('TotalPNL'));
				return arr_graph;
		}
	}
	makeConfig(dataProvider, graphs){
		return {
			"type": "serial",
			"theme": "light",
			"dataDateFormat": "YYYY-MM-DD",
			"chartScrollbar": {
				"graph": "g1",
				"oppositeAxis": false,
				"offset": 30,
				"scrollbarHeight": 20
			},
			"chartCursor": {
			  "pan": true,
			  "valueLineEnabled": true,
			  "valueLineBalloonEnabled": true,
			  "cursorAlpha": 1,
			  "cursorColor": "#258cbb",
			  "valueLineAlpha": 0.2,
			},
			"categoryField": "date",
			"categoryAxis": {
				"color":"#fff",
			  "parseDates": true,
			  "minorGridEnabled": true,
			  "autoGuides": {
				"days": [ 0, 6 ],
				"lineColor": "#000",
				"lineAlpha": 0,
				"fillColor": "#000",
				"fillAlpha": 0.2
			  }
			},
			"graphs": graphs,
			"dataProvider":dataProvider,
			legend:{}
		}
	}
    render(){
		
		console.log("RESULT",this.state);
		const config = this.makeConfig(this.state.dataProvider,this.state.graph);
        return(
            <section className="text-center row" style={{marginRight:'0px'}}>
			<Select className="col-md-4"
				styles={customStyles}
				onChange={this.OptionChange}
				options={this.state.selectOptions}
				placeholder='PNL'
			/>
                <div className="col-md-12" >
					<AmCharts.React style={{height:'500px' ,width:'100%'}} options={config}/>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
	console.log("STATE",state);
    return state.inform.portfolios === undefined ? {portfolios:[]}:{portfolios: state.inform.portfolios};
}
export default connect(mapStateToProps)(Graph);