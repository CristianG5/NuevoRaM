import "./card.css";

export default function Card(props) {
   const {character, onClose} = props;
   return (
      <div className="card-container">
         <div className="image-container">
            <img 
            className="character-image" 
            src={props.image} 
            alt={props.name} 
            />
            <h2 className="name">{props.name}</h2>
            <button className="close-button" onClick={()=>onClose(character.id)}>
               X
            </button>
         </div>
         <div className="atributes">
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}

