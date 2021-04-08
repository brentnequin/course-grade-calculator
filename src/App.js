import './App.css';
import GradeCalculator from './Components/GradeCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Grade Calculator</h1>
      </header>
      <main className="App-main">
        <GradeCalculator />
      </main>
      <footer className="App-footer">
        <small>Created by <a href="http://brentnequin.com">Brent Nequin</a></small>
      </footer>
    </div>
  );
}

export default App;
