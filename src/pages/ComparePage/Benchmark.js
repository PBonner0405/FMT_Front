import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Benchmark extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            posts:[
                {
                    "stock":"Car",
                    "count":"24",
                    "value":"720",
                    "price":"30",
                    "profit":"5",
                    "Edit":"Edit",
                },
                {
                    "stock":"Oil",
                    "count":"21",
                    "value":"1260",
                    "price":"60",
                    "profit":"10",
                    "Edit":"Edit",
                },
                {
                    "stock":"Gas",
                    "count":"40",
                    "value":"440",
                    "price":"11",
                    "profit":"15",
                    "Edit":"Edit",
                },
                {
                    "stock":"Printer",
                    "count":"14",
                    "value":"140",
                    "price":"10",
                    "profit":"20",
                    "Edit":"Edit",
                },
                {
                    "stock":"Computer",
                    "count":"5",
                    "value":"150",
                    "price":"30",
                    "profit":"30",
                    "Edit":"Edit",
                    
                },
                {
                    "stock":"Mouse",
                    "count":"20",
                    "value":"2000",
                    "price":"100",
                    "profit":"15",
                    "Edit":"Edit",
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
                width: 300
            },
            {
                Header:"Shares",
                accessor:"count",
                width:300
            },
            {
                Header:"Value($)",
                accessor:"value",
                width:300
            },
            {
                Header:"Profit(%)",
                accessor:"profit",
                width:400
            },
            {
                Header:"Price($)",
                accessor:"price",
                width:300
            },
            {
                Header:({ row }) => (<button className="btn btn-info" style={{width:'100px'}}>Add</button>),
                accessor:"Edit",
                Cell: ({ row }) => (
                <div>
                    <button className="btn btn-primary" style={{marginRight:'10px'}}onClick={(e) => this.handleButtonClick(e, row)}>Edit</button>
                    <button className="btn btn-danger" onClick={(e) => this.handleButtonDelete(e, row)}>Delete</button>
                </div>
                )


            },
        ];
        return(
            <center>
            <ReactTable
                columns={columns}
                data={this.state.posts}
                bordered={false}
                defaultPageSize={10}
                className="-striped -highlight"
                /></center>
        )
    }
}

export default Benchmark;