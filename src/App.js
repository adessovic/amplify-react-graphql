import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px' }} />
        <p>Getting Started with AWS <b>Amplify</b></p>
        <a
          href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/"
          rel="noopener noreferrer"
          className="App-link"
          target="_blank"
        >
          Build a Full-Stack React Application
        </a>

        <div>
          <h3>Guide/Tutorials</h3>
          <ul>
            <li>
                <a
                className="App-link"
                href='https://www.youtube.com/watch?v=9R3v3lhfkTk'
                target={'_blank'} rel="noreferrer">IAM Users & Groups Tutorial
                </a>
              </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
