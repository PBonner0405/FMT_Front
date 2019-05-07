import React, {Component} from 'react';
import Stock from '../../components/Stock';
import About from '../../components/About';
import Trading from '../../components/Trading';
import Description from '../../components/Description';
import Portfolio from '../../components/Portfolio';
import MenuBar from '../../components/ProfileMenubar';
import {getStock, getPortfolio} from '../../actions';
import {connect} from 'react-redux';
import cookieRead from '../../browser/cookieRead';

class ProfilePage extends Component{
    componentDidMount(){
        const username = cookieRead('username');
        this.props.getStock(username);
        this.props.getPortfolio(username);
    }
    render(){
        return(
            <div>              
                <MenuBar/>
                <About/>
                <Stock/>
                <Trading/>
                <Description/>
                <Portfolio/>
            </div>
        );
    }
}

export default connect(null,{getStock, getPortfolio})(ProfilePage);