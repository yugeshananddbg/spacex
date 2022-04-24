import "./App.css";
import SpaceX from "./Components/SpaceX.jsx";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SpaceX Launch Programs</h1>
      </header>
      <SpaceX />
      <footer className="App-footer">
        <span className="bold">Developed By :</span> {"{ Yugesh Anand }"}
      </footer>
    </div>
  );
}

export default App;
