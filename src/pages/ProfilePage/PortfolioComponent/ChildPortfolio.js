import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

const iStyle={
    fontSize:'40px',
    color:'#31BB9E',
    marginTop:'6px',
    marginRight:'10px'
}
const likeStyle={
    justifyContent:'center',
    display:'flex'
}
const numStyle={
    color:'#31BB9E',
    backgroundColor:'#fff',
    fontSize:'35px',
    padding:'0px',
    fontWeight:'400'
}
class ChildPortfolio extends React.Component{
    portfolio(e){
        e.preventDefault();
        this.props.history.push('/portfolio');
    }
    render(){
        return(
            <div class="col-md-4 col-sm-6 col-xs-12 btn" onClick={e => this.portfolio(e)}>
                <div class="pricing-item">
                    <div class="pricing-body">
                        <div class="price">
                            <span>€122</span>
                        </div>
                        <p>{this.props.desc}</p>
                        <div style={likeStyle}>
                            <i className="fa fa-thumbs-up" style={iStyle}></i>
                            <h3 style={numStyle}>55</h3>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="col-md-4" style={conStyle}>
            //     <button onClick={e => this.portfolio(e)} style={{height:'200px'}} type="button" className="btn btn-info btn-lg btn-block">
            //         <h2 style={hStyle}>{this.props.desc}</h2>
            //         <div style={likeStyle}>
            //             <i className="fa fa-thumbs-up" style={iStyle}></i>
            //             <h3 style={numStyle}>55</h3>
            //         </div>
            //     </button>
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
    )(ChildPortfolio)
);