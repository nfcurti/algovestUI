import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FarmContainer from "./components/FarmContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Stats />
      <h2 color="primary" className="header_h1" style={{textAlign:'center'}}>Stake LP tokens to earn GRAIL</h2>
      <div style={{paddingRight:'2em', paddingLeft:'2em'}}>
        <Hero />
        <div class="sc-kYrkKh cqrcSX"></div>
      </div>
      <FarmContainer />
    </div>
  );
}

export default App;
