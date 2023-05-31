import React, { useEffect } from "react";
import AddAndSearch from "./Navigation/addAndSearch";
import RemainingTasks from "./Navigation/remainingTasks";
import TaskStatus from "./Navigation/taskStatus";

interface NavBarProps {
  inputElement: React.RefObject<HTMLInputElement>;
  setPlaceHolder: React.Dispatch<React.SetStateAction<string>>;
  selectedCount: number;
  length: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({
  inputElement,
  setPlaceHolder,
  selectedCount,
  length,
  setFilter,
}) => {
  return (
    <div className="navbar">
      <div className="lookup">
        <AddAndSearch
          inputElement={inputElement}
          setPlaceHolder={setPlaceHolder}
          setFilter={setFilter}
        />
        <RemainingTasks selectedCount={selectedCount} length={length} />
      </div>
      <TaskStatus setFilter={setFilter} />
    </div>
  );
};

export default NavBar;
