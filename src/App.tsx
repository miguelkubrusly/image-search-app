import searchImages from "./api"
import SearchBar from "./components/SearchBar"

function App():JSX.Element{
  const handleSubmit = (searchTerm:string):void|string => {
    alert("Do a search with " + searchTerm)
  }
  
  return(
  <div>
    <SearchBar onSubmit = {handleSubmit} />
  </div>
  ) 
}

export default App