import "./ItemCard.css"

function ItemCard({ clothingOption, onCardClick }) {
    return (
        <li className="card" onClick={onCardClick}>
            <h4 className="card__title">{clothingOption.name}</h4>
            <img
              className="card__image"
              src={clothingOption.link}
              alt={clothingOption.name}
            />
        </li>
    );
}

export default ItemCard