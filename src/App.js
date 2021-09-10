import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import ListEmployee from './components/employee/ListEmployee';
import CreateEmployee from './components/employee/CreateEmployee';

function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component = {ListEmployee}></Route>
                <Route path="/employees" exact component = {ListEmployee}></Route>
                <Route path="/add-employee"  component = {CreateEmployee}></Route>
                
              </Switch>
            </div>
            <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
