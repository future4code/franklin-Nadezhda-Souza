import './App.css';
import Nav from './components/nav';
import HomePage from './pages/HomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/Loginpage';
import AdminHomePage from './pages/AdminHomePage';
import CreateTripPage from './pages/CreateTripPage';



function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
