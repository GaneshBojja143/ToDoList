import React, { useState, useRef } from "react";
import Header from "./Components/Header/header";
import SearchBar from "./Components/TaskBar/searchBar";
import ToDoList from "./Components/TaskBody/toDoList";
import NavBar from "./Components/Footer/navbar";
import logo from "./logo.svg";
import "./App.css";

interface MyObject {
  id: number;
  value: string;
  isChecked: boolean;
}

/*Biggest Task: Need to reduce the time complexity.......I included every hook in the main APP component only....
So, whenever any changes whole component will re-render  =============> Do this...after below remaining tasks..*/

//First use UseContext HOOK.....
const App = () => {
  //const userContext
  const [message, setMessage] = useState(""); //This is used when edit option feature added in project
  const [toDoList, setToDoList] = useState<MyObject[]>([]);
  const [placeHolder, setPlaceHolder] = useState("Add New");
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);

  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />
      <SearchBar
        setMessage={setMessage}
        setToDoList={setToDoList}
        setSearchQuery={setSearchQuery}
        inputElement={inputElement}
        placeHolder={placeHolder}
        filter={filter}
      />
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        setSelectedCount={setSelectedCount}
        filter={filter}
        searchQuery={searchQuery}
      />
      <NavBar
        inputElement={inputElement}
        setPlaceHolder={setPlaceHolder}
        selectedCount={selectedCount}
        length={toDoList.length}
        setFilter={setFilter}
      />
    </>
  );
};

export default App;
