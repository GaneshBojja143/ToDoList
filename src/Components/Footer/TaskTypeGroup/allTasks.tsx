import TaskOptions from "../../../Enum/taskOptions";

interface AllTasksProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const AllTasks: React.FC<AllTasksProps> = ({ setFilter }) => {
  return (
    <button className="task-portion" onClick={() => setFilter(TaskOptions.All)}>
      All
    </button>
  );
};

export default AllTasks;
