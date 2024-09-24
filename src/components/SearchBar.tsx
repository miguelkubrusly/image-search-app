import { PropertyName } from "typescript";
import searchImages from "../api";

function SearchBar({onSubmit}:any):JSX.Element { 
  
  const handleClick = (): void => {
    onSubmit("cars")
  };

  return (
    <div>
      <form>
        <input />
        <button onClick={handleClick}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
