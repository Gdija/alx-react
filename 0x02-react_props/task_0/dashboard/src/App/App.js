import logo from './holberton-logo.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';
import {getFullYear, getFooterCopy} from './utils'
import Notifications from '../Notifications/Notifications';


function App() {
    return (
    <>
    <Notifications />
    <div className="App">
        <Header />
    </div>
    <div className="App-body">
        <Login />
    </div>
    <div className="App-footer">
        < Footer />
    </div>
    </>
  );
}

export default App;
