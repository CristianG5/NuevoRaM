import Card from "../card/Card";
import style from "./cards.module.css";

export default function Cards(props) {
  const {characters, onClose} = props;

  return (
    <div className={style.cardList}>
      {characters?.map((character) => (
        <Card 
        key={character.id} 
        name={character.name}
        gender={character.gender}
        image={character.image} 
        onClose={onClose} 
        />
      ))}
    </div>
  );
}
