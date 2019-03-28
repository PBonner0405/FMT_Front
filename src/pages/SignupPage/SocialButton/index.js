import React from 'react';
import SocialLogin from 'react-social-login';
import './styles.css';

const Button = ({ children, triggerLogin, ...props }) => (
  <button
    onClick={triggerLogin}
    {...props}
    className="socialButton"
    style={{ marginTop: '10px', color: '#FFF' }}
  >
    {children}
  </button>
);

export default SocialLogin(Button);
