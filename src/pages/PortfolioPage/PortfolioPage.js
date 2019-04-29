import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const iStyle={
    fontSize:'40px',
    color:'#31BB9E',
    marginTop:'6px',
    marginRight:'10px'
}
const likeStyle={
    justifyContent:'center',
    display:'flex',
    marginTop:'20px'
}
const numStyle={
    color:'#31BB9E',
    backgroundColor:'#fff',
    fontSize:'35px',
    padding:'0px',
    fontWeight:'400'
}


class PortfolioPage extends React.Component{
    
    GoComparePage(){
        this.props.history.push('/comparepage');
    }
    render(){
        return(
            <div>
                <section class="single-page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Portfolio</h2>
                                <nav aria-label="breadcrumb mx-auto" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/profile">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
                                </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="pricing-table section">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="title text-center">
                                    <h2>This Portfolio is About Oil</h2>
                                    <span class="border"></span>
                                    <p>It was about February, it was cold, and I felt completely and utterly creatively empty. I felt like I was stuck, stuck in a whole that I dug myself. I had done all I could do with Squarespace. That couldn't be true could it? I realized I hadn't tried to just work on NON-CLIENT projects, make the sites I always wanted to, the sites that showcase the brand the work and help clients see what is possible, not just the little things that they want.</p>
                                    <div style={likeStyle}>
                                        <i className="fa fa-thumbs-up" style={iStyle}></i>
                                        <h3 style={numStyle}>55</h3>
                                    </div>
                                    <a class="btn btn-main" style={{marginTop:'20px'}} onClick={()=>this.GoComparePage()}>Compare</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            
            // <div className="proStyle">
            //     <div className ="conStyle ui raised segment">
            //         <h1 className = "page-title hStyle">This Portfolio is About Oil</h1>
            //         <p>It was about February, it was cold, and I felt completely and utterly creatively empty. I felt like I was stuck, stuck in a whole that I dug myself. I had done all I could do with Squarespace. That couldn't be true could it? I realized I hadn't tried to just work on NON-CLIENT projects, make the sites I always wanted to, the sites that showcase the brand the work and help clients see what is possible, not just the little things that they want.</p>
            //         <div className="stock">
            //             <h3>Stock:</h3>
            //             <h4>Cars</h4>
            //         </div>
            //         <div className="func">
            //             <i className="fa fa-thumbs-up"style={{fontSize:'30px',color: 'rgb(57, 75, 107)'}}></i>
            //             <h3 className="likenum">55</h3>
            //         </div>
            //             <button type="button" className="ui facebook button float-md-right float-sm-left" onClick={()=>this.GoComparePage()}>
            //               Compare
            //             </button>
            //     </div>
            // </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
  });


export default withRouter(
    connect(
      mapStateToProps
    )(PortfolioPage)
);