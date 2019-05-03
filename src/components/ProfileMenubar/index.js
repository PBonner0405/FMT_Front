import React from 'react';
import { connect } from 'react-redux';

class ProfileMenuBar extends React.Component{
    render(){
        return(
            <section className="header  navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
                                <div class="container">
                                    <a class="navbar-brand" href="#"><span>Trading</span></a>

                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#about">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#stock">Stock</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#trading">Trading</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#description">Description</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#portfolio">Portfolio</a>
                                            </li>
                                            
                                            <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                                <img className="userimg" src="assets/img/avatar1.jpg"/>
                                                {this.props.username}
                                            </a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="/landingpage">Sign Out</a>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {username:state.user.email};
}

export default connect(mapStateToProps)(ProfileMenuBar);