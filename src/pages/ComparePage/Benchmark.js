import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import $ from 'jquery';

class Benchmark extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            posts:[
                {
                    "stock":"Car",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
                {
                    "stock":"Oil",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
                {
                    "stock":"Gas",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
                {
                    "stock":"Furniture",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
                {
                    "stock":"Wood",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
                {
                    "stock":"Sugar",
                    "pips":"8.9K",
                    "trades":"1131",
                    "roi":"28%",
                    "avg":"8",
                    "win":"79%",
                    "max":"6%",
                    "weeks":"23"
                },
            ]
        }
    }

    // componentDidMount(){
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     fetch(url,{
    //         method: "GET"
    //     }).then(response => response.json()).then(posts => {
    //         this.setState({posts:posts});
    //     })
    // }

    render(){
        const columns = [
            {
                Header:"Stock",
                accessor:"stock",
                width: 150
            },
            {
                Header:"PIPS",
                accessor:"pips",
                width:150
            },
            {
                Header:"TRADES",
                accessor:"trades",
                width:150
            },
            {
                Header:"ROI ANNUALIZED",
                accessor:"roi",
                width:250
            },
            {
                Header:"AVG PIPS",
                accessor:"avg",
                width:150
            },
            {
                Header:"WIN %",
                accessor:"win",
                width:150
            },
            {
                Header:"MAX DD%",
                accessor:"max",
                width:150
            },
            {
                Header:"WEEKS",
                accessor:"weeks",
                width:150
            }
        ];
        return(
            <ReactTable
                columns={columns}
                styles={{width:'90%'}}
                data={this.state.posts}
                bordered={false}
                defaultPageSize={10}
                className="-striped -highlight"
                />
        )
    }
}

export default Benchmark;