import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Graph from './Graph';
import Benchmark from './Benchmark';


class ComparePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          key: 'home'
        };
      }

    render(){
        return(
            <div style={{paddingTop:'20px'}}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}>
                    <Tab eventKey="home" title="Graph">
                        <Graph></Graph>
                    </Tab>
                    <Tab eventKey="profile" title="Benchmark">
                    <Benchmark></Benchmark>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default ComparePage;