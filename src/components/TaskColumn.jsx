function TaskColumn({tasks = [], label, color}) {
    return (
        <div className="w-1/3">
            <div className={`bg-${color}-100 m-2 p-3 border rounded`}>
                <h2 className="font-medium text-xl border-b border-neutral-500 pb-1 mb-2">
                   {label}
                </h2>
                <div className="p-2">
                    {tasks.length ? tasks.map((task) => (
                        <div key={task.id} className="p-2 mb-1 bg-white border rounded">
                            {task.title}
                        </div>
                    )) : <div className="text-gray-500 italic">No tasks</div>}
                </div>
            </div>
         </div>
    )
}

export default TaskColumn;