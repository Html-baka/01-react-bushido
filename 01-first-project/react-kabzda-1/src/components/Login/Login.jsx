import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import s from "../common/FormsControls/FormsControls.module.css"
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input}
          validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
          validate={[required]}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
      </div>
      { captchaUrl && <img src={captchaUrl}/>}
      { captchaUrl && <Field placeholder={"Symbols from image"} 
        name={"captcha"} component={Input} validate={[required]}/>}
      {error && <div className={s.formSummaryError}> {error}</div>}
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  //a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
   }
   if (props.isAuth) {
     return <Redirect to={"/profile"} />
   }
  return (
    <div>
      <h1>Log In</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
