import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <h2>Sample axios library</h2>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
