import styles from "./styles";
import { useState } from "react";

const Login = () => {
  const [active, setActive] = useState("login");
  console.log(active === "login");
  return (
    <styles.MainContainer>
      <div>
        <styles.FormContainer>
          <styles.Register onClick={() => setActive("register")}>
            REGISTER
          </styles.Register>
          <styles.Login onClick={() => setActive("login")}>LOGIN</styles.Login>
          <styles.CardsWrapper active={active}>
            <styles.LoginCard isactive={active === "login"}>
              LOGIN
              <input></input>
            </styles.LoginCard>
            <styles.RegisterCard isactive={active === "register"}>
              REGISTER
              <input></input>
            </styles.RegisterCard>
          </styles.CardsWrapper>
        </styles.FormContainer>
      </div>
    </styles.MainContainer>
  );
};

export default Login;
