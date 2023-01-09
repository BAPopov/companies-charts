import Header from "./layout/header";
import Chart from "./features/chart/components/Chart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Chart />
      </main>
    </div>
  );
}

export default App;
