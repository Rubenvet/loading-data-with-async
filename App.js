import './App.css';
import ZenQuote from "./ZenQuote";
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
     <GithubUserInfo username="facebook" />
     <GithubUserInfo username="colt" />
     <GithubUserInfo username="gaearon" />
     <GithubUserInfo username="sophiebits" />
    </div>
  );
}

export default App;
