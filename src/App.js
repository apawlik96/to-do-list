import './App.css';
import { Task } from './Task';

function App() {
  const tasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ];

  return (
    <div className="App">
      <main className="App-header">

        <div className="task-list">
          {tasks.map((task) => (
            <Task text={task} />
          ))}

          <div className="task-select">
            <p>5 items left</p>
            <p>All Active Completed</p>
            <p>Clear Completed</p>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
