import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import Logo from "./assets/Logo.png";

function App() {

   function closeHandler(){
      window.alert('Emulamos que se cierra la card');
   }

   function searchHandler(){
      window.alert('Busqueda');
   }

   return (
      <div className='home-container'>
            <img className='home-title' src={Logo} alt="title"/>
            <SearchBar onSearch={searchHandler} />
            <Cards characters={characters} onClose={closeHandler} />
      </div>
      );
   }

      
   export default App;
