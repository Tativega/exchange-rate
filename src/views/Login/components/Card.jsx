import { useHistory } from "react-router-dom";
import styles from "./styles";
const Card = ({
  active,
  login,
  register,
  handleRegister,
  handleLogin,
  changeForm,
}) => {
  const history = useHistory();

  const handleSubmitLogin = () => {
    sessionStorage.setItem("token", 1);
    history.replace("/");
  };

  const handleSubmitRegister = () => {
    changeForm("login");
  };

  const handleRegisterChange = (e, type) => {
    const { value } = e.target;
    handleRegister({ type, value });
  };

  return (
    <styles.CardsWrapper active={active}>
      <form
        onSubmit={active === "login" ? handleSubmitLogin : handleSubmitRegister}
      >
        {active && active === "login" ? (
          <styles.LoginCard isactive={active === "login"}>
            LOGIN
            <styles.Input
              type="text"
              placeholder="email"
              value={login.email}
              onChange={(e) =>
                handleLogin({ type: "email", value: e.target.value })
              }
            />
            <styles.Input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={login.password}
              onChange={(e) =>
                handleLogin({ type: "password", value: e.target.value })
              }
            />
            <styles.Button type="submit">SUBMIT</styles.Button>
          </styles.LoginCard>
        ) : (
          <styles.RegisterCard isactive={active === "register"}>
            REGISTER
            <styles.Input
              type="text"
              placeholder="name"
              value={register.name}
              onChange={(e) => handleRegisterChange(e, "name")}
            />
            <styles.Input
              type="text"
              placeholder="email"
              value={register.email}
              onChange={(e) => handleRegisterChange(e, "email")}
            />
            <styles.Input
              type="password"
              placeholder="password"
              value={register.password}
              autoComplete="new-password"
              onChange={(e) => handleRegisterChange(e, "password")}
            />
            <styles.Input
              type="password"
              placeholder="confirm password"
              value={register.confirmpassword}
              onChange={(e) => handleRegisterChange(e, "confirmpassword")}
            />
            <styles.Button>SUBMIT</styles.Button>
          </styles.RegisterCard>
        )}
      </form>
    </styles.CardsWrapper>
  );
};

export default Card;
