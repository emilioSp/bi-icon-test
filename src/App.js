import logo from './logo.svg';
import { Icon } from 'design-react-kit';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test bootstrap italia icon
        </p>
        <Icon
          color="white"
          icon="it-tool"
          padding={false}
          size="lg"
        />
      </header>
    </div>
  );
}

export default App;
