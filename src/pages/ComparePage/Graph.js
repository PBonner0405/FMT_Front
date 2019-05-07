import React from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Select from 'react-select';
import {connect} from 'react-redux';
import AmCharts from "@amcharts/amcharts3-react";

import cookieRead from '../../browser/cookieRead';
import { array } from 'prop-types';
const dataProvider =[ {
	date: "2012-08-12",
	value: 32,
	value1: 32
  }, {
	date: "2012-08-13",
	value: 18,
	value1: 32
  }, {
	date: "2012-08-14",
	value: 24,
	value1: 32
  }, {
	date: "2012-08-15",
	value: 22,
	value1: 32
  }, {
	date: "2012-08-16",
	value: 18,
	value1: 20
  }, {
	date: "2012-08-17",
	value: 19,
	value1: 321
  }, {
	date: "2012-08-18",
	value: 14,
	value1: 32
  }, {
	date: "2012-08-19",
	value: 15,
	value1: 33
  }, {
	date: "2012-08-20",
	value: 12,
	value1: 39
  }, {
	date: "2012-08-21",
	value: 8,
	value1: 98
  }, {
	date: "2012-08-22",
	value: 9,
	value1: 32
  }, {
	date: "2012-08-23",
	value: 8,
	value1: 32
  }, {
	date: "2012-08-24",
	value: 7,
	value1: 32
  }, {
	date: "2012-08-25",
	value: 5,
	value1: 32
  }, {
	date: "2012-08-26",
	value: 11,
	value1: 32
  }, {
	date: "2012-08-27",
	value: 13,
	value1: 32
  }, {
	date: "2012-08-28",
	value: 18
  }, {
	date: "2012-08-29",
	value: 20,
	value1: 32
  }, {
	date: "2012-08-30T00:00:00.000Z",
	value: 29,
	value1: 32
  }, {
	date: "2012-08-31T00:00:00.000Z",
	value: 33,
	value1: 32
  }, {
	date: "2012-09-01T00:00:00.000Z",
	value: 42,
	value1: 32
  }, {
	date: "2012-09-02T00:00:00.000Z",
	value: 35,
	value1: 32
  },];

  const customStyles = {
    container: (provided) => ({
      ...provided,
	  width: '100%',
	  margin:'auto',
	  marginTop:'50px'
    })
  };
  var chart = {
		"type": "serial",
		"theme": "light",
		"dataDateFormat": "YYYY-MM-DD",
		"graphs": [ {
			"title":"Portfolio0",
			"lineThickness": 2,
			"valueField": "value",
			"bullet": "round",
			"bulletBorderAlpha": 1,
			"bulletColor": "#FFFFFF",
			"bulletSize": 5,
			"hideBulletsCount": 50,
			"useLineColorForBulletBorder": true,
			"balloonText": "[[title]]: [[value]]"
		}
		 ],
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
		// "valueAxes":{
		// 	"color":"#fff"
		// },
		"categoryField": "date",
		"categoryAxis": {
			"color":"#fff",
		  "parseDates": true,
		  "minorGridEnabled": true,
		  "autoGuides": {
			"days": [ 0, 6 ],
			"lineColor": "#fff",
			"lineAlpha": 0,
			"fillColor": "#fff",
			"fillAlpha": 0.2
		  }
		},
		"dataProvider":dataProvider,
		legend:{}
  }

class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
			selectedOption:null,
			portfolios:[],
			stocks:[],
			currentPF:{},
			data:[]
		};
		var graph = new AmCharts.AmGraph();
		graph.title="Portfolio1";
		graph.valueField="value1";
		graph.lineThickness = 2;
		graph.balloonText = "Portfolio1";
		chart.graphs.push(graph);
		console.log("CHART",chart);
	}
	CreateEngine(PF){
		const stStocks = this.state.stocks;
		this.state.data = [];

		console.log("STOCKS",stStocks);
		console.log("Portfolios",this.state.portfolios);
		var arr_date = [];
		stStocks.map(i => {
			i.shistory.map(i => {
				arr_date.push(i.date);
			})
		})
		arr_date.sort((a,b) => Date.parse(a) - Date.parse(b))
		var arr_stocks = [];
		var cnt;
		console.log("date",arr_date);

		stStocks.map((i,iStock) => {
			cnt = 0;
			arr_stocks[iStock] = new Array
			let profit = i.shistory[0].profit;
			
			arr_date.map(index => {
				if(Date.parse(index) == Date.parse(i.shistory[cnt].date)){
					profit = i.shistory[cnt].profit;
					if(cnt !== i.shistory.length -1)
						cnt ++;
				}
				arr_stocks[iStock].push(profit);
			})
		})
		console.log("ARRSTOCKS",arr_stocks);

		var sum_array = [];
		const portfolios = this.state.portfolios;
		
		portfolios.map((iport,indexpf ) => {
			sum_array[indexpf] = new Array;
				arr_date.map((i, index) => {
					sum_array[indexpf][index] = 0;
					iport.stocks.map((temp) => {
						var stIndex = stStocks.findIndex(e => e.stockName == temp.stock);
						sum_array[indexpf][index] += arr_stocks[stIndex][index] * temp.cnt;
					})
					// arr_stocks.map(profit => {
					// 	sum_array[index] += profit[index];
					// })
					// this.state.data.push({
					// 	name:Date.parse(i),
					// 	portfolio:sum_array[index]
					// })
				})
		})
		var Chartdata = [];
		arr_date.map((i, index) => {
			var temp = [];
			portfolios.map((iPort) => {
				Chartdata.push({
					date:i,

				})
			})
		})
		console.log("SUM",sum_array);
	}
	componentDidMount(){
		var options = [];
		var json_str = cookieRead('portfolios');
		var list = JSON.parse(json_str);
		list.map(i => {
			options.push({value:i.title, label:i.title});
		})
		const result = list.find(e => e.title === this.props.title);
		this.state.portfolios = list;
		this.setState({ selectOptions : options,
					currentPF : result});
		json_str = cookieRead('stocks');
		list = JSON.parse(json_str);
		this.state.stocks= list;
		this.CreateEngine(result);
		
	}
    handleChange = (selectedOption) => {
        this.setState({selectedOption:selectedOption});
        console.log('Option selected:',selectedOption);
    }
    
    render(){
		
		console.log("RESULT",this.state);
        const {selectedOption} = this.state;
        return(
            <section className="text-center row" style={{marginRight:'0px'}}>
                <div className="col-md-12" >
					<AmCharts.React style={{height:'500px' ,width:'100%'}} options={chart}/>


                </div>
					<Select className="col-md-4"
						styles={customStyles}
						value={selectedOption}
						onChange={this.handleChange}
						options={this.state.selectOptions}
						isMulti
					/>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
	console.log("STATE",state);
    return state.inform.portfolios == undefined ? {portfolios:[]}:{portfolios: state.inform.portfolios};
}

export default connect(mapStateToProps)(Graph);