import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage></MainPage>
    </div>
  );
}

export default App;
