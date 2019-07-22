import React from 'react';
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
        this.props.history.push({
            pathname: '/comparepage',
            state: {title: this.props.location.state.title}
        });
    }
    GoHomePage(){
        this.props.history.push('/profile');
    }
    render(){
        console.log(this.props.location.state);
        return(
            <div>
                <section class="single-page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Portfolio</h2>
                                <nav aria-label="breadcrumb mx-auto" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a style={{cursor:'pointer'}} onClick={() => this.GoHomePage()}>Home</a></li>
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
                                    <h2>{this.props.location.state.title}</h2>
                                    <span class="border"></span>
                                    <p>{this.props.location.state.comment}</p>
                                    <div style={likeStyle}>
                                        <i className="fa fa-thumbs-up" style={iStyle}></i>
                                        <h3 style={numStyle}>{this.props.location.state.likes}</h3>
                                    </div>
                                    <a class="btn btn-main" style={{marginTop:'20px'}} onClick={()=>this.GoComparePage()}>Compare</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
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