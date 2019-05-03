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
                                                <a class="nav-link" href="/login">Log In</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/signup">Register</a>
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

export default ProfileMenuBar;