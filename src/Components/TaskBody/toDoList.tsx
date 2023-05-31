import React, { useEffect, useState } from "react";
import CheckBox from "./checkBox";
import TaskOptions from "../../Enum/taskOptions";

interface MyObject {
  id: number;
  value: string;
  isChecked: boolean;
}

interface ToDoListProps {
  toDoList: MyObject[];
  setToDoList: React.Dispatch<React.SetStateAction<MyObject[]>>;
  setSelectedCount: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  searchQuery: string;
}

const ToDoList: React.FC<ToDoListProps> = ({
  toDoList,
  setToDoList,
  setSelectedCount,
  filter,
  searchQuery,
}) => {
  const filteredList = toDoList.filter((item) => {    
    if (filter === TaskOptions.SearchQuery) return item.value.toLowerCase().includes(searchQuery.toLowerCase());
    else if (filter === TaskOptions.Completed) return item.isChecked;
    else if (filter === TaskOptions.Active) return !item.isChecked;
    return true;
  });  

  const HandleCheckBoxCount = (identity: number, checked: boolean) => {
    setSelectedCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));

    setToDoList((prevState) =>
      prevState.map((item) =>
        item.id === identity ? { ...item, isChecked: checked } : item
      )
    );
  };

  return (
    <>
      <ul className="to-do-list">
        {filteredList.map((item) => (
          <React.Fragment key={item.id}>
            <li>
              <CheckBox
                id={item.id}
                isChecked={item.isChecked}
                handleCheckBox={HandleCheckBoxCount}
              />
              <span>{item.value}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
