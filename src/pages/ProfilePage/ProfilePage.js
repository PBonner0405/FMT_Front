import React, {Component} from 'react';
import StockComponent from './StockComponent';
import AboutComponent from './AboutComponent';
import TradingComponent from './TradingComponent';
import DescriptionComponent from './DescriptionComponent';
import './style.css';
import PortfolioComponent from './PortfolioComponent';
import MenuBarComponent from './MenuBarComponent';
class ProfilePage extends Component{
    render(){
        return(
            <div>              
                <MenuBarComponent/>
                <AboutComponent/>
                <StockComponent/>
                <TradingComponent/>
                <DescriptionComponent/>
                <PortfolioComponent/>
            </div>
        );
    }
}
export default ProfilePage;