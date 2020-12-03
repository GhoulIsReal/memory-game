import React, { Fragment, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import generateCards from "@/cards";
import CardList from "@/Components/CardList";
import { connect } from "react-redux";
import "../../css/game.css";
import MemoryActions from "@/actions";
import { Inertia } from "@inertiajs/inertia";

const mapStateToProps = state => ({
  memory: state.memory
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MemoryActions, dispatch)
});

const Game = props => {
  const { game, memory, actions } = props;

  useEffect(() => {
    const { cards, round } = memory;
    const finished = cards.every(card => card.discovered);
    if (finished) {
      Inertia.post(`/game/${game.id}/finish`, {
        steps: round - 1
      });
    }
  });

  return (
    <Fragment>
      <h1>Game #{game.id}</h1>
      <h3>Current steps: {memory.round - 1}</h3>
      <CardList cards={memory.cards} flipCard={actions.flipCard} />
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
