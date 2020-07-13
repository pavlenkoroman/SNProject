import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        isLoggedIn: state.auth.isLoggedIn
    }
}

export const authWithRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
                if (this.props.isLoggedIn) return <Component {...this.props}/> 
                return  <Redirect to='/login' />
            }
    }

    let connectedComponentWithRedirect = connect(mapStateToProps)(RedirectComponent)

    return connectedComponentWithRedirect;

}