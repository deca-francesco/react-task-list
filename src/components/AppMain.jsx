export default function AppMain() {

    const greeting = "Welcome to my react app";

    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    console.log(tasks);

    // faccio 2 array filtrando l'array originale per task completati
    const current_tasks = tasks.filter((task) => task.state === "in_progress" || task.state === "backlog");
    const completed_tasks = tasks.filter((task) => task.state === "completed");

    return (
        <main>
            <h2>{greeting}</h2>

            <section className="current_tasks">
                <h3>Current Tasks ({current_tasks.length}) </h3>

                {current_tasks.map((task, id, priority, estimatedTime, state) => {
                    return (
                        <div className="task">
                            <span className="task_title" key={id}><strong>{task.title}</strong></span>
                            <span className="task_state" key={state}>{task.state}</span>
                            <div className="task_priority" key={priority}>Priority:{task.priority}</div>
                            <div className="task_time" key={estimatedTime}>Est. time {task.estimatedTime}</div>
                        </div>
                    )
                })}
            </section>

            <hr />

            <section className="completed_tasks">
                <h3>Completed Tasks ({completed_tasks.length})</h3>
                {completed_tasks.map((task, id, priority, estimatedTime, state) => {
                    return (
                        <div className="task">
                            <span className="task_title" key={id}><strong>{task.title}</strong></span>
                            <span className="task_state" key={state}>{task.state}</span>
                            <div className="task_priority" key={priority}>Priority:{task.priority}</div>
                            <div className="task_time" key={estimatedTime}>Est. time {task.estimatedTime}</div>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}