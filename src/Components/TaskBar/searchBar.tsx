import React, { useState } from "react";
import TaskOptions from "../../Enum/taskOptions";

interface MyObject {
  id: number;
  value: string;
  isChecked: boolean;
}

interface SearchBarProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setToDoList: React.Dispatch<React.SetStateAction<MyObject[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  inputElement: React.RefObject<HTMLInputElement>;
  placeHolder: string;
  filter: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setMessage,
  setToDoList,
  setSearchQuery,
  inputElement,
  placeHolder,
  filter,
}) => {
  const [text, setText] = useState("");

  const HandleKeyChange = (event: any) => {
    setText(event.target.value);
  };

  const HandleKeyDown = (event: any) => {
    if (event.key === "Enter" && filter != TaskOptions.SearchQuery) {
      setToDoList((previousvalue: any) => [
        ...previousvalue,
        {
          id: previousvalue.length + 1,
          value: event.target.value,
          isChecked: false,
        },
      ]);
      setMessage(event.target.value);
      setText("");
    } else if (event.key === "Enter") {
      setSearchQuery(event.target.value);
      setText("");
    }
  };

  return (
    <input
      type="search"
      value={text}
      name="task"
      id="taskbar"
      placeholder={placeHolder}
      ref={inputElement}
      onChange={HandleKeyChange}
      onKeyDown={HandleKeyDown}
    />
  );
};

export default SearchBar;
