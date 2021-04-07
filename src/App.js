import './App.css';
import GradeCalculator from './Components/GradeCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grade Calculator</h1>
      </header>
      <main>
        <GradeCalculator />
      </main>
      <footer className="App-footer">
        <br></br>
        <small>Created by <a href="http://brentnequin.com">Brent Nequin</a></small>
      </footer>
    </div>
  );
}

export default App;
