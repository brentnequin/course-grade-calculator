import './App.css';
import GradeCalculator from './Components/GradeCalculator';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper className="header-block">
          <div className="header-wrapper">
            <h1>Course Grade Calculator</h1>
          </div>
        </Paper>
      </header>
      <main className="App-main">
        <GradeCalculator />
      </main>
      <footer className="App-footer">
        <Paper>
          <div className="footer-wrapper">
            <small>Created by <a href="http://brentnequin.com">Brent Nequin</a></small>
          </div>
        </Paper>
      </footer>
    </div>
  );
}

export default App;
