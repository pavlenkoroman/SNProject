import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { LoginInput } from '../../common/formElements/LoginFormElements/LoginFormElements';
import { minLength, maxLength, required } from '../../utilities/validators';
import style from './Login.module.css'

const Login = (props) => {
    return (
        <LoginReduxForm />
    )
}

let minLength5 = minLength(5)
let maxLength20 = maxLength(20)

const LoginForm = (props) => {

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component={LoginInput} type={"text"} placeholder={'Login'} name={'login'} validate={[required, minLength5, maxLength20]} />
            </div>
            <div>
                <Field component={LoginInput} type={"password"} placeholder={'Password'} name={'password'} validate={[required, minLength5]}/>
            </div>
            <div>
                <Field component={LoginInput} type={"checkbox"} name={'rememberMe'} />Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



export default Login;