//import background from './pic/bg1.svg';
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppNavbar from "./components/AppNavBar";
import Home from "./components/Home";
import PicosPage from "./PicosPage";
import ManagerPage from "./components/ManagerComponents/ManagerPage"; 
//<div style={{height:'48px',width:'auto',float: 'right'}}>
function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/picos" exact component={PicosPage} />
        <Route path="/manage/v1" exact component={ManagerPage} />
      </Switch>
    </Router>
  );
}

export default App;
