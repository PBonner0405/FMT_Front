import React, {Component} from 'react';
import Stock from '../../components/Stock';
import About from '../../components/About';
import Trading from '../../components/Trading';
import Description from '../../components/Description';
import './style.css';
import Portfolio from '../../components/Portfolio';
import MenuBar from '../../components/ProfileMenubar';
class ProfilePage extends Component{
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
export default ProfilePage;