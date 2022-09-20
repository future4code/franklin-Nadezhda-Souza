import './App.css';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <Router/>
{/*       <HomePage/>
      <SignUpPage/>
      <LoginPage/> */}
    </div>
  );
}

export default App;
