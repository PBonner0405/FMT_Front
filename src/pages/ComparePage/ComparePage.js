import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Graph from './Graph';
// import Table from './Table';
import {withRouter} from 'react-router-dom';
import SimpleTable from './Table'

import cookieRead from '../../browser/cookieRead';
import {getStock, getPortfolio} from '../../actions';
import {connect} from 'react-redux';

class ComparePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          key: 'home'
        };
        console.log("I am DIDMOUNT");
        const username = cookieRead('username');
        this.props.getStock(username);
        this.props.getPortfolio(username);
        
    }
    componentDidMount(){
    }
    GoHomePage(){
        this.props.history.push('/profile');
    }
    render(){
        return(
            <div className ="compare">
                <section class="single-page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Compare</h2>
                                <nav aria-label="breadcrumb mx-auto" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a style={{cursor:'pointer'}} onClick={() => this.GoHomePage()}>Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Compare</li>
                                </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}>
                    <Tab eventKey="home" title="Graph" >
                        <Graph title = {this.props.location.state.title}></Graph>
                    </Tab>
                    <Tab eventKey="profile" title="Benchmark">
                        <SimpleTable title = {this.props.location.state.title}></SimpleTable>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default withRouter(connect(null, {getStock, getPortfolio})(ComparePage));