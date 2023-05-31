import TaskOptions from "../../../Enum/taskOptions";

interface ActiveTasksProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ActiveTasks: React.FC<ActiveTasksProps> = ({ setFilter }) => {
  return (
    <button
      className="task-portion"
      onClick={() => setFilter(TaskOptions.Active)}
    >
      Active
    </button>
  );
};

export default ActiveTasks;
