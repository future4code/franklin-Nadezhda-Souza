import './App.css';
import { ChatWindow } from './components/chat-window';
import { InputContainer } from './components/input-container';

function App() {
  return (
    <div className="App">
      <ChatWindow/>
      <InputContainer/>
    </div>
  );
}

export default App;
