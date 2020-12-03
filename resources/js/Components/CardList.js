import React from "react";
import CardListItem from "./CardListItem";

const CardList = ({ cards, flipCard }) => (
  <ul className="cards">
    {cards.map(card => (
      <CardListItem key={card.id} card={card} flipCard={flipCard} />
    ))}
  </ul>
);

export default CardList;
