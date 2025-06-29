import { FaCheck, FaHourglass, FaPencilAlt } from 'react-icons/fa';

function TaskColumn({tasks = [], label, color, updateTaskStatus}) {
    // Function to get the appropriate icon based on label
    const getIcon = () => {
        if (!label) return null;
        
        switch(label.toLowerCase()) {
            case 'pending':
                return <FaHourglass className="mr-2" />;
            case 'in progress':
                return <FaPencilAlt className="mr-2" />;
            case 'done':
                return <FaCheck className="mr-2" />;
            default:
                return null;
        }
    };

    return (
        <div className="w-1/3">
            <div className={`bg-${color}-100 m-2 p-3 border rounded`}>
                <h2 className="font-medium text-xl border-b border-neutral-500 pb-1 mb-2 flex items-center">
                   {getIcon()}
                   {label}
                </h2>
                <div className="p-2">
                    {tasks.length ? tasks.map((task) => (
                        <div 
                            key={task.id} 
                            className="p-2 mb-1 bg-white border rounded hover:bg-gray-50 transition-colors flex justify-between items-center"
                            title="Click icons to change status"
                        >
                            <span>{task.title}</span>
                            <div className="flex items-center">
                                {task.status !== "pending" && (
                                    <FaPencilAlt
                                        onClick={() => updateTaskStatus(task.id, "pending")}
                                        className="mx-1 hover:cursor-pointer text-yellow-500 hover:text-yellow-600"
                                    />
                                )}
                                
                                {task.status !== "doing" && (
                                    <FaHourglass
                                        onClick={() => updateTaskStatus(task.id, "doing")}
                                        className="mx-1 hover:cursor-pointer text-blue-500 hover:text-blue-600"
                                    />
                                )}
                                
                                {task.status !== "done" && (
                                    <FaCheck
                                        onClick={() => updateTaskStatus(task.id, "done")}
                                        className="mx-1 hover:cursor-pointer text-green-500 hover:text-green-600"
                                    />
                                )}
                            </div>
                        </div>
                    )) : <div className="text-gray-500 italic">No tasks</div>}
                </div>
            </div>
         </div>
    )
}

export default TaskColumn;