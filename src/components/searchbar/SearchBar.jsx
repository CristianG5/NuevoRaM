import { SearchContainer, SearchInput } from "./searchbar";

export default function SearchBar({onSearch}) {
   return (
      <SearchContainer>
         <SearchInput type='search'/>
         <button onClick={onSearch}>Agregar</button> 
      </SearchContainer>
   );
}
