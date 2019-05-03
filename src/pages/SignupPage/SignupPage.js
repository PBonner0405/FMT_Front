import React, { Component } from 'react';
import Axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { LogInCard, Form, Button } from "../../Shared/styles.js";
import { NavLink } from "react-router-dom";



class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }
  /*New*/
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }
  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }
  handleusernameChanged(event) {
    this.setState({ username: event.target.value });
  }
  hidePassword(){
    this.setState({showPassword : false})
  }
  showPassword(){
    this.setState({showPassword : true})
  }

  submitForm(e) {
    e.preventDefault();
    const {
      email,
      username,
      password
    } = this.state;


    const url = 'http://192.168.1.120:8000/users/register';
    console.log("I am here!!!!!!!!!!");
    Axios({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        username: username,
        password: password
      }
    })
      .then(res => {
        console.log(res.data);
        alert('Sign Up Successfull');
        this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err);
        // alert(err);
      });
  }

  render() {

    return (
      <div className="loginContainer">
        <LogInCard>
          <Form className="p-3" onSubmit={this.submitForm.bind(this)}>
            <p style={{color:'black',textTransform:'CAPITALIZE',fontSize:'44px',textAlign:'center',fontWeight:'bold'}}>Sign up</p>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">account_circle</i>
                </span>
              </div>
              <input
                type="text"
                name="username"
                className="form-control"
                value={this.state.username}
                onChange={this.handleusernameChanged.bind(this)}
                placeholder="Username"
                required
            />
            </div>

            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">email</i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleemailChanged.bind(this)}
                placeholder="Email"
                required
            />
            </div>
            
          
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="material-icons">vpn_key</i>
                </span>
              </div>
              <input
                type = {!this.state.showPassword?"password":"text"}
                className="form-control"
                value={this.state.password}
                name="password"
                placeholder="Password"
                onChange={this.handlePasswordChanged.bind(this)}
                required
            />
            { !this.state.showPassword ?(
                    <div className="input-group-apppend">
                    <div className="input-group-text passwordbug">
                    <a href="javascript:;" onClick={this.showPassword.bind(this)}>
                    <i className="material-icons">visibility</i>
                    </a>
                    </div>
                    </div>):
              (<div className="input-group-apppend">
               <div className="input-group-text passwordbug">
               <a href="javascript:;" onClick={this.hidePassword.bind(this)}>
               <i className="material-icons">visibility_off</i>
               </a>
               </div>
               </div>)}      
        </div>
            <Button className="btn btn-lg btn-primary" style={{background:'#597bd9'}}type="submit">
              Sign Up
            </Button>
            
            <p className="text-center" style={{margin:'20px 0px',fontSize: "24px" }}>
              <NavLink to="/login">Already Have a Account?</NavLink>
            </p>
          </Form>
          <svg
            className="rocks"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              className="svg--sm"
              fill="red"
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              className="svg--lg"
              fill="red"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>
          <svg className="gradient">
            <defs>
              <linearGradient id="grad">
                <stop offset="0" stopColor="#97ABFF" />
                <stop offset="1" stopColor="#123597" />
              </linearGradient>
            </defs>
          </svg>
        </LogInCard>
      </div>
      // <div className="template-light">
      //   <div className="wrapper wrapper-content--- overflow-hidden">
      //     <div className="container-login">
      //       {/* <div className="wpay-logo text-center">
      //         <img src={'/assets/img/core-img/wpay-logo.png'} alt="" />
      //       </div> */}
      //       {/* Card Area  */}
      //       <div className="card-login-area">
      //         <h1 className="title text-center">Sign Up</h1>
      //         <div className="input-container">
      //           <label htmlFor="req">Email</label>
      //           <input
      //             type="email"
      //             id="email"
      //             required
      //             value={email}
      //             onChange={this.onChangeEmail}
      //             name="email"
      //           />
      //         </div>
      //         <div className="input-container">
      //           <label htmlFor="req">User Name</label>
      //           <input
      //             type="text"
      //             id="uName"
      //             required
      //             onChange={e => this.onChangeUserName(e)}
      //             value={username}
      //           />
      //         </div>

      //         <div className="input-container">
      //           <label htmlFor="req">Nick Name</label>
      //           <input
      //             type="text"
      //             id="nName"
      //             required
      //             onChange={e => this.onChangeNickName(e)}
      //             value={nickname}
      //           />
      //         </div>              
              
      //         <div className="input-container">
      //           <label htmlFor="pass">Password</label>
      //           <input
      //             type="password"
      //             id="pass"
      //             name="password"
      //             required
      //             value={password}
      //             onChange={e => this.onChangePassword(e)}
      //           />
      //         </div>
      //         <div className="input-container">
      //           <label htmlFor="cPass">Confirm Password</label>
      //           <input
      //             type="password"
      //             id="cPass"
      //             name="password"
      //             required
      //             value={cPassword}
      //             onChange={e => this.onChangecPassword(e)}
      //           />
      //         </div>
      //         <div className={value ? 'd-inline' : 'd-none'}>
      //           {cPassword === password ? (
      //             <h4>Password Matched</h4>
      //           ) : (
      //             <h4>Password Not Matched</h4>
      //           )}
      //         </div>
      //         <div className="button-container" onClick={this.Register}>
      //           <button>
      //             <span>Sign Up</span>
      //           </button>
      //         </div>
      //         <div className="not-account">
      //           Already have an account? <a href="/login">Sign In Here</a>
      //         </div>
      //       </div>

      //       {/* Card Area  */}
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupPage)
);
