import React from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Select from 'react-select';
import {connect} from 'react-redux';
import AmCharts from "@amcharts/amcharts3-react";

import cookieRead from '../../browser/cookieRead';
const dataProvider =[ {
	a:"dsaf",
	date: "2012-08-12",
	value: 32,
	value1: 32
  }, {
	a:"dsaf",
	date: "2012-08-13",
	value: 18,
	value1: 32
  }, {
	a:"dsaf",
	date: "2012-08-14",
	value: 24,
	value1: 32
  }, {
	a:"dsaf",
	date: "2012-08-15",
	value: 22,
	value1: 32
  }, {
	a:"dsaf",
	date: "2012-08-16",
	value: 18,
	value1: 20
  }, {
	a:"dsaf",
	date: "2012-08-17",
	value: 19,
	value1: 321
  }, {
	a:"dsaf",
	date: "2012-08-18",
	value: 14,
	value1: 32
  }, {
	a:"dsaf",
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
  },
];

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
		console.log("DataProvider:",dataProvider);
		this.state={
			dataProvider:[],
			graph:[],
			currentPF:[]
		}
	}

	componentDidMount(){
		var options = [];
		var json_str = cookieRead('portfolios');
		var jsonPF = JSON.parse(json_str);
		jsonPF.map(i => {
			if(this.props.title != i.title)
				options.push({value:i.title, label:i.title});
		})
		const result = jsonPF.find(e => e.title === this.props.title);
		var jsonST;
		json_str = cookieRead('stocks');
		jsonST = JSON.parse(json_str);

		// this.state.selectOptions = options;
		// this.state.portfolios = jsonPF;
		// this.state.stocks = jsonST;

		/**					CREATE ENGINE			 */

		console.log("STOCKS",jsonST);
		console.log("Portfolios",jsonPF);
		var arr_date = [];
		jsonST.map(i => {
			i.shistory.map((i) => {
				arr_date.push(i.date);
			})
		})
		arr_date.sort((a,b) => Date.parse(a) - Date.parse(b))
		var arr_stocks = [];
		var cnt;
		console.log("date",arr_date);

		jsonST.map((i,iStock) => {
			cnt = 0;
			arr_stocks[iStock] = new Array;
			let profit = i.shistory[0].profit;
			
			arr_date.map(index => {
				if(Date.parse(index) === Date.parse(i.shistory[cnt].date)){
					profit = i.shistory[cnt].profit;
					if(cnt !== i.shistory.length -1)
						cnt ++;
				}
				arr_stocks[iStock].push(profit);
			})
		})
		console.log("ARRSTOCKS",arr_stocks);

		var sum_array = [];
		var array_PnL = [];
		result.stocks.map((iST) => {
			var indexST = jsonST.findIndex( e => e.stockName === iST.stockName);
			var indexHST = 0;
			var PnL = 0;
			var buy_array = [];
			arr_date.map((iDT, indexDT) => {
				//iST.stockname
				if(iST.history[indexHST].date === iDT){
					if(iST.history[indexHST].option === "buy")
						buy_array.push({quantity:iST.history[indexST].cnt, price: arr_stocks[indexST][indexDT]})
					if(iST.history[indexHST].option === "sell")
					{
						buy_array.map((iBY) => {
							
						})
					}
					array_PnL[indexDT] = PnL;
					indexHST ++;
				}
			})
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
		// console.log("SUM",sum_array);

		// var CData = [];
		// arr_date.map((i, index) => {
		// 	var temp = {};
		// 	temp["date"] = i;
		// 	jsonPF.map((iPort,indexPort) => {
		// 		temp[iPort.title] = sum_array[indexPort][index];
		// 	})
		// 	CData.push(temp);
		// })
		// var graphtemp = [];
		// graphtemp.push(this.initialGraph(result));
		// this.setState({dataProvider: CData,
		// 				selectOptions:options,
		// 				currentPF:result,
		// 				graph:graphtemp
		// 				});
		
		// console.log("CREATE ENGINE FINAL DATA",this.state);
	}
	initialGraph(currentPF){
		var graph = new AmCharts.AmGraph();
		graph.id = "g1";
		graph.title= currentPF.title;
		graph.valueField=currentPF.title;
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
    handleChange = (selectedOption) => {
		console.log('Option selected:',this.state);
		var temp = [];
		temp.push(this.initialGraph(this.state.currentPF));
		if(selectedOption != null)
		{
			selectedOption.map(i => {
				var graph = new AmCharts.AmGraph();
				graph.title= i.value;
				graph.valueField=i.value;
				graph.lineThickness = 2;
				graph.balloonText = "[[title]]: [[value]]";
				graph.bullet = "round";
				graph.bulletBorderAlpha = 1;
				graph.bulletColor = "#FFFFFF";
				graph.bulletSize = 5;
				graph.hideBulletsCount = 50;
				graph.useLineColorForBulletBorder = true;
				temp.push(graph);
			})
		}
		this.setState({
			graph:temp
		});
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
				onChange={this.handleChange}
				options={this.state.selectOptions}
				isMulti
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