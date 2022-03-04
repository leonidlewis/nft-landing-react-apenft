import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AlphaHome } from "./components/Pages/alphaHome/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScrollToTopBtn from "./components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={AlphaHome} />
          </Switch>
          <ScrollToTopBtn />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
