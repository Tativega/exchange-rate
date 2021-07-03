import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route
          path="/"
          render={() =>
            !!sessionStorage.getItem("token") ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
