import styles from "./styles";
import Card from "./components/Card";
import { useState, useReducer } from "react";
import { loginReducer, registerReducer } from "./reducer";

const Login = () => {
  const [active, setActive] = useState("login");

  const register = { name: "", email: "", password: "", confirmpassword: "" };
  const login = { email: "", password: "" };

  const [registerState, registerDispatch] = useReducer(
    registerReducer,
    register
  );
  const [loginState, loginDispatch] = useReducer(loginReducer, login);

  return (
    <styles.MainContainer>
      <styles.Logo />
      <styles.FormContainer>
        <styles.Register onClick={() => setActive("register")}>
          <span>
            First time at Ortex?
            <br /> Click here to
          </span>
          REGISTER
        </styles.Register>
        <styles.Login onClick={() => setActive("login")}>
          <span>
            Already have an account?
            <br /> Go to
          </span>
          LOGIN
        </styles.Login>
        <Card
          active={active}
          register={registerState}
          login={loginState}
          handleLogin={loginDispatch}
          handleRegister={registerDispatch}
          changeForm={setActive}
        />
      </styles.FormContainer>
    </styles.MainContainer>
  );
};

export default Login;
