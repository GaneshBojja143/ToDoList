import TaskOptions from "../../../Enum/taskOptions";

interface CompletedTasksProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const CompletedTasks: React.FC<CompletedTasksProps> = ({ setFilter }) => {
  return (
    <button
      className="task-portion"
      onClick={() => setFilter(TaskOptions.Completed)}
    >
      Completed
    </button>
  );
};

export default CompletedTasks;
