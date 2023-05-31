import NewTask from "../AddSearchTask/newTask";
import SearchTask from "../AddSearchTask/searchTask";

interface AddAndSearchProps {
  inputElement: React.RefObject<HTMLInputElement>;
  setPlaceHolder: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const AddAndSearch: React.FC<AddAndSearchProps> = ({
  inputElement,
  setPlaceHolder,
  setFilter,
}) => {
  return (
    <>
      <NewTask
        inputElement={inputElement}
        setPlaceHolder={setPlaceHolder}
        setFilter={setFilter}
      />
      <SearchTask
        inputElement={inputElement}
        setPlaceHolder={setPlaceHolder}
        setFilter={setFilter}
      />
    </>
  );
};

export default AddAndSearch;
