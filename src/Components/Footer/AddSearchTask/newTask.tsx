import React from "react";
import TaskOptions from "../../../Enum/taskOptions";

interface NewTaskProps {
  inputElement: React.RefObject<HTMLInputElement>;
  setPlaceHolder: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const NewTask: React.FC<NewTaskProps> = ({
  inputElement,
  setPlaceHolder,
  setFilter,
}) => {
  const doOperations = () => {
    focusInput();
    setPlaceHolder("Add New");
    setFilter(() => TaskOptions.All);
  };

  const focusInput = () => {
    inputElement.current?.focus();
  };

  return (
    <a href="#" onClick={doOperations}>
      &#43;
    </a>
  );
};

export default NewTask;
