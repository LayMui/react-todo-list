import { useMemo } from "react";
import TaskColumn from "./TaskColumn";

function Tasks({ tasks, setTasks, updateTaskStatus }) {
  const pendingTasks = useMemo(
    () => tasks.filter((task) => task.status === "pending"),
    [tasks]
  );

  const doingTasks = useMemo(
    () => tasks.filter((task) => task.status === "doing"),
    [tasks]
  );
  
  const doneTasks = useMemo(
    () => tasks.filter((task) => task.status === "done"),
    [tasks]
  );

  return (
    <div className="bg-white p-3 my-5 border rounded">
      <div className="flex justify-between">
        <TaskColumn
          tasks={pendingTasks}
          setTasks={setTasks}
          label="Pending"
          color="neutral"
          updateTaskStatus={updateTaskStatus}
        />
        <TaskColumn
          tasks={doingTasks}
          setTasks={setTasks}
          label="In Progress"
          color="slate"
          updateTaskStatus={updateTaskStatus}
        />
        <TaskColumn
          tasks={doneTasks}
          setTasks={setTasks}
          label="Done"
          color="emerald"
          updateTaskStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
}

export default Tasks;