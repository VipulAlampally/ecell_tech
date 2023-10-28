const Task = ({task}) => {
    return(
        <div>
            <h2>{task.name}</h2>
            <h3>{task.date}</h3>

        </div>
    )
}

export default Task;