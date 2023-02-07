import "./ItemCard.css";

function ItemCard({ clothingOption, onCardClick }) {
  return (
    <li className="card">
      <div className="card__wrapper">
        <h4 className="card__title">{clothingOption.name}</h4>
        <img
          className="card__image"
          src={clothingOption.imageUrl}
          alt={clothingOption.name}
          onClick={() => {
            onCardClick(clothingOption);
          }}
        />
      </div>
    </li>
  );
}

export default ItemCard;
