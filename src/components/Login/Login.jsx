import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { LoginInput } from '../../common/formElements/LoginFormElements/LoginFormElements';
import { minLength, maxLength, required, email } from '../../utilities/validators';
import style from './Login.module.css'
import { login, logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const signIn = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe = false)
    }

    if (props.isLoggedIn) {
        return <Redirect to={'/profile'} />
    }
    return (
        <LoginReduxForm onSubmit={signIn} />
    )
}

let minLength5 = minLength(5)

const LoginForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component={LoginInput} type={"text"} placeholder={'e-mail'} name={'email'} validate={[required, email]} />
            </div>
            <div>
                <Field component={LoginInput} type={"password"} placeholder={'Password'} name={'password'} validate={[required, minLength5]} />
            </div>
            <div>
                <Field component={LoginInput} type={"checkbox"} name={'rememberMe'} />Remember me
            </div>
            {props.error && <div className={style.formValidation}>
                {props.error}
            </div>}

            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, { login, logout })(Login);