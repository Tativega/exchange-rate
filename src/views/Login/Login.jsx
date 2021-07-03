import styles from "./styles";
import { useState } from "react";

const Login = () => {
  const [active, setActive] = useState("login");
  return (
    <styles.MainContainer>
      <styles.Logo />
      <styles.FormContainer>
        <styles.Register onClick={() => setActive("register")}>
          REGISTER
        </styles.Register>
        <styles.Login onClick={() => setActive("login")}>LOGIN</styles.Login>
        <styles.CardsWrapper active={active}>
          <styles.LoginCard isactive={active === "login"}>
            LOGIN
            <styles.Input placeholder="email" />
            {/* <input placeholder="email" autoFocus /> */}
            <styles.Input placeholder="password" />
            <styles.Button>SUBMIT</styles.Button>
          </styles.LoginCard>
          <styles.RegisterCard isactive={active === "register"}>
            REGISTER
            {/* <input placeholder="name" autoFocus /> */}
            <styles.Input placeholder="name" />
            <styles.Input placeholder="email" />
            <styles.Input placeholder="password" />
            <styles.Input placeholder="confirm password" />
            <styles.Button>SUBMIT</styles.Button>
          </styles.RegisterCard>
        </styles.CardsWrapper>
      </styles.FormContainer>
    </styles.MainContainer>
  );
};

export default Login;
