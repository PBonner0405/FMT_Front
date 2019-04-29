import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Select from 'react-select';
const data = [
    {
      "name": "2018 Dec",
      "oil": 4000,
      "gas": 2400,
      "amt": 2400
    },
    {
      "name": "2019 Jan",
      "oil": 3000,
      "gas": 1398,
      "amt": 2210
    },
    {
      "name": "2019 Feb",
      "oil": 2000,
      "gas": 9800,
      "amt": 2290
    },
    {
      "name": "2019 Mar",
      "oil": 2780,
      "gas": 3908,
      "amt": 2000
    },
    {
      "name": "2019 Apr",
      "oil": 1890,
      "gas": 4800,
      "amt": 2181
    },
    {
      "name": "2019 May",
      "oil": 2390,
      "gas": 3800,
      "amt": 2500
    },
    {
      "name": "2019 Jun",
      "oil": 3490,
      "gas": 4300,
      "amt": 2100
    }
  ];

  const options = [
    { value: 'oil', label: 'Oil' },
    { value: 'car', label: 'Car' },
    { value: 'gas', label: 'Gas' }
  ];

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '400px',
    })
  };

class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedOption:null,
        };
        
    }
    handleChange = (selectedOption) => {
        this.setState({selectedOption:selectedOption});
        console.log('Option selected:',selectedOption);
    }
    
    render(){

        const {selectedOption} = this.state;
        return(
            <div className="row">
                <div className="col-md-8">
                  <LineChart width={1000} height={550} data={data}
                  margin={{ top: 100, right: 30, left: 50, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gas" stroke="#8884d8" />
                    <Line type="monotone" dataKey="oil" stroke="#82ca9d" />
                  </LineChart>

                </div>
                <div className="col-md-4" style={{paddingTop:'100px'}}>
                  <Select
                      styles={customStyles}
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                      isMulti
                  />

                </div>
                
            </div>
        )
    }
}

export default Graph;