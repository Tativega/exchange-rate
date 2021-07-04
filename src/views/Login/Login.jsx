import styles from "./styles";
import Card from "./components/Card/Card";
import RecoveryPassword from "./components/RecoveryPassword";
import { useState, useReducer } from "react";
import { loginReducer, registerReducer } from "./reducer";

const Login = () => {
  const [active, setActive] = useState("login");
  const [openModal, setOpenModal] = useState(false);

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
          handleModal={setOpenModal}
          register={registerState}
          login={loginState}
          handleLogin={loginDispatch}
          handleRegister={registerDispatch}
          changeForm={setActive}
        />
      </styles.FormContainer>
      {openModal && <RecoveryPassword closeModal={() => setOpenModal(false)} />}
    </styles.MainContainer>
  );
};

export default Login;
