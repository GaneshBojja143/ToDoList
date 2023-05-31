import TaskOptions from "../../../Enum/taskOptions";

interface SearchTaskProps {
  inputElement: React.RefObject<HTMLInputElement>;
  setPlaceHolder: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchTask: React.FC<SearchTaskProps> = ({
  inputElement,
  setPlaceHolder,
  setFilter,
}) => {
  const doOperations = () => {
    focusInput();
    setPlaceHolder("Search Task");
    setFilter(() => TaskOptions.SearchQuery);
  };

  const focusInput = () => {
    inputElement.current?.focus();
  };

  return (
    <a href="#" onClick={doOperations}>
      &#128269;
    </a>
  );
};

export default SearchTask;
