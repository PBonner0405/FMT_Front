import React from 'react';

class AboutComponent extends React.Component{
    render(){
        return(
            <section class="hero-area" id="#about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                            <div class="block">
                                <h2>Bitcoin is a remarkable cryptographic achievement</h2>
                                <p>The ability to create something which is not duplicable in the digital world has enormous value…Lot’s of people will build businesses on top of that.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                        </div>
                    </div>
                </div>
            </section>
            // <div className ="text-center" style={headerStyle}>
            //     <img style={imgStyle} className = "avatar" src={'/assets/img/avatar.jpg'} alt="" />
            //     <h2 style={hStyle}>Full Name</h2>
            //     <h2 style={hStyle}>Nick Name</h2>
            // </div>
        )
    }
}

export default AboutComponent;
