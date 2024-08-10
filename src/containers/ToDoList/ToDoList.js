import { Task } from '../../components/Task/Task';
import toDoListStyles from '../ToDoList/ToDoList.module.css';

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
            <div className={toDoListStyles.taskList}>

                {tasks.map((task) => (
                    <Task text={task} />
                ))}

                <div className={toDoListStyles.taskSelect}>
                    <p>Items left</p>
                    <div className={toDoListStyles.taskSelectButtonGroup}>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <button className={toDoListStyles.buttonClearCompletedTask}>Clear Completed</button>
                </div>

            </div>

            <div className={toDoListStyles.taskSelectButtonGroupSeparated}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </>

    );
}
