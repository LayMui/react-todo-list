import { FaCheck, FaHourglass, FaPencilAlt, FaTimesCircle } from 'react-icons/fa';

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

    // Function to get the next status in the workflow
    const getNextStatus = (currentStatus) => {
        switch(currentStatus) {
            case 'pending':
                return 'doing';
            case 'doing':
                return 'done';
            case 'done':
                return null; // No further progression after done
            default:
                return 'pending';
        }
    };

    // Handle task item click to move to next status
    const handleTaskClick = (task) => {
        const nextStatus = getNextStatus(task.status);
        if (nextStatus) {
            updateTaskStatus(task.id, nextStatus);
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
                            className="p-2 mb-1 bg-white border rounded hover:bg-gray-50 transition-colors flex justify-between items-center cursor-pointer"
                            title="Click to move to next status"
                            onClick={() => handleTaskClick(task)}
                        >
                            <span>{task.title}</span>
                            <div className="flex items-center">
                                                            {label.toLowerCase() !== 'done' && (
                                    <>
                                        {task.status !== "pending" && (
                                            <FaPencilAlt
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    updateTaskStatus(task.id, "pending");
                                                }}
                                                className="mx-1 hover:cursor-pointer text-yellow-500 hover:text-yellow-600"
                                            />
                                        )}

                                        {task.status !== "doing" && (
                                            <FaHourglass
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    updateTaskStatus(task.id, "doing");
                                                }}
                                                className="mx-1 hover:cursor-pointer text-blue-500 hover:text-blue-600"
                                            />
                                        )}

                                        {task.status !== "done" && (
                                            <FaCheck
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    updateTaskStatus(task.id, "done");
                                                }}
                                                className="mx-1 hover:cursor-pointer text-green-500 hover:text-green-600"
                                            />
                                        )}
                                    </>
                                )}

                                {task.status === "done" && (
                                    <FaTimesCircle
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // Optional delete function here
                                        }}
                                        className="mx-1 hover:cursor-pointer text-red-500 hover:text-red-600"
                                        title="Task completed"
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