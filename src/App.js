import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
          <h2>Employee Management App</h2>
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
