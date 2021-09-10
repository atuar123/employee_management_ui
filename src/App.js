import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import ListEmployee from './components/employee/ListEmployee';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
         <ListEmployee/>
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
