import './App.css';
import { ChatHeaderContainer } from './components/chat-header';
import { ChatWindow } from './components/chat-window';
import { InputContainer } from './components/input-container';

function App() {
  return (
    <div className="App">
      <ChatHeaderContainer 
      image="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
      nomeDaConversa={'WhatsLab'}/>
      <ChatWindow/>
      <InputContainer/>
    </div>
  );
}

export default App;
