import AllTasks from "../TaskTypeGroup/allTasks";
import ActiveTasks from "../TaskTypeGroup/activeTasks";
import CompletedTasks from "../TaskTypeGroup/completedTasks";
import React from "react";

interface TaskStatusProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TaskStatus: React.FC<TaskStatusProps> = ({ setFilter }) => {
  return (
    <div className="task-type">
      <AllTasks setFilter={setFilter} />
      <ActiveTasks setFilter={setFilter} />
      <CompletedTasks setFilter={setFilter} />
    </div>
  );
};

export default TaskStatus;
