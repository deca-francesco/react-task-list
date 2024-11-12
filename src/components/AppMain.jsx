import tasks from "../data/tasks.js";



export default function AppMain() {

    const greeting = "Welcome to my react app";

    console.log(tasks);

    // faccio 2 array filtrando l'array originale per task completati
    const current_tasks = tasks.filter(task => task.state === "in_progress" || task.state === "backlog");
    const completed_tasks = tasks.filter(task => task.state === "completed");

    return (
        <main>
            <h2>{greeting}</h2>

            <section className="current_tasks">
                <h3>Current Tasks ({current_tasks.length}) </h3>
                <ul>
                    {current_tasks.map(task => {
                        return (
                            <li className="task" key={task.id}>
                                <span className="task_title"><strong>{task.title}</strong></span>
                                <span className="task_state">{task.state}</span>
                                <div className="task_priority">Priority:{task.priority}</div>
                                <div className="task_time">Est. time {task.estimatedTime}</div>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <hr />

            <section className="completed_tasks">
                <h3>Completed Tasks ({completed_tasks.length})</h3>
                <ul>
                    {completed_tasks.map(task => {
                        return (
                            <li className="task" key={task.id}>
                                <span className="task_title"><strong>{task.title}</strong></span>
                                <span className="task_state">{task.state}</span>
                                <div className="task_priority">Priority:{task.priority}</div>
                                <div className="task_time">Est. time {task.estimatedTime}</div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}