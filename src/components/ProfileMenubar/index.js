import React from 'react';

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
                                            Nick
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Sign Out</a>
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                            {/* <nav className="navbar navbar-expand-md navbar-fixed-top" id="mainNav">
                                <a className="navbar-brand" href="#">
                                    <img src="images/logo.png" alt="" width="150px"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="tf-ion-android-menu"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link js-scroll-trigger" href="#stock">Stock</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link js-scroll-trigger" href="#trading">Trading</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link js-scroll-trigger" href="#description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProfileMenuBar;