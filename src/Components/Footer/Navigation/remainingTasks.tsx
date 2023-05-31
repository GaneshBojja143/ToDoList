import React from "react";

interface RemainingTasksProps {
  selectedCount: number;
  length: number;
}

const RemainingTasks: React.FC<RemainingTasksProps> = ({
  selectedCount,
  length,
}) => {
  return <span>{length - selectedCount} items left</span>;
};

export default RemainingTasks;
