import './App.scss';
import Navbar from "./components/Navbar"
import Main from "./components/Main"

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Main />
      </div>

      <div className="musicControls">music controls</div>
    </div>
  );
}

export default App;
