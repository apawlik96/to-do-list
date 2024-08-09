import { Task } from '../../components/Task/Task';
import '../ToDoList/ToDoList.css';

export const ToDoList = () => {

    const tasks = [
        "Complete online JavaScript course",
        "Jog around the park 3x",
        "10 minutes meditation",
        "Read for 1 hour",
        "Pick up groceries",
        "Complete Todo App on Frontend Mentor",
    ];

    return (

        <>
            <div className="task-list">

                {tasks.map((task) => (
                    <Task text={task} />
                ))}

                <div className="task-select">
                    <p>Items left</p>
                    <div className="task-select-button-group">
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <button className="button-clear-completed-task">Clear Completed</button>
                </div>

            </div>

            <div className="task-select-button-group-separated">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </>

    );
}
