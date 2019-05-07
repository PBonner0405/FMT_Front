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
        this.props.history.push(
        {
            pathname:'/portfolio',
            state: { title:this.props.title,
                     comment:this.props.comment,
                     likes:this.props.likes}
        }
        );
    }
    render(){
        return(
            <div class="col-md-4 col-sm-6 col-xs-12 btn" onClick={e => this.portfolio(e)}>
                <div class="pricing-item">
                    <div class="pricing-body">
                        <div class="price">
                            <span>€122</span>
                        </div>
                        <p>{this.props.title}</p>
                        <div style={likeStyle}>
                            <i className="fa fa-thumbs-up" style={iStyle}></i>
                            <h3 style={numStyle}>{this.props.likes}</h3>
                        </div>
                    </div>
                </div>
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
    )(ChildPortfolio)
);