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
                            className="p-2 mb-1 bg-white border rounded cursor-pointer hover:bg-gray-50 transition-colors"
                            onDoubleClick={() => {
                                const nextStatus = task.status === 'pending' ? 'doing' : 
                                                  task.status === 'doing' ? 'done' : 'pending';
                                updateTaskStatus(task.id, nextStatus);
                            }}
                            title="Double-click to change status"
                        >
                            {task.title}
                        </div>
                    )) : <div className="text-gray-500 italic">No tasks</div>}
                </div>
            </div>
         </div>
    )
}

export default TaskColumn;