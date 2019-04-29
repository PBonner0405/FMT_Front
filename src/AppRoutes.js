import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import NotFound from './pages/NotFound/NotFound';
import ComparePage from './pages/ComparePage/ComparePage';
class AppRoutes extends Component {
    state = {};

    render() {
        return (
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                {/* <Route path='/login' component={LoginPage} /> */}
                <Route path='/signup' component={SignupPage} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route path='/landingpage' component={LandingPage} />
                <Route path='/comparepage' component={ComparePage} />
                <Redirect exact from='/' to='/login' />
                <Route component={NotFound} />
            </Switch>
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
    )(AppRoutes)
);
  