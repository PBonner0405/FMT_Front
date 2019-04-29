import React from 'react';

class MenuBarComponent extends React.Component{
    render(){
        return(
            <section className="header  navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-md" id="mainNav">
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
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MenuBarComponent;