import React from "react";

const Foods = (props) => {
  const renderFoods = () => {
    return props.foods.map((food) => {
      return (
        <div className="actor-container">
          <h3>{food.dish}</h3>
          <p>food id:{food.id}</p>
          <a href={`/actors/${props.actor.id}/foods/${food.id}`}>show</a>
          <a href={`/actors/${props.actor.id}/foods/${food.id}/edit`}>edit</a>
          <a
            data-method="delete"
            href={`/actors/${props.actor.id}/foods/${food.id}`}
          >
            delete
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>actor: {props.actor.character}</h1>
      <p>actor id: {props.actor.id}</p>

      {/* a link to go back to actors index */}
      <a href={`/actors`}>back to actors</a>
      <a href={`/actors/${props.actor.id}/foods/new`}>New food</a>
      <hr />
      <h2>foods: </h2>
      {renderfoods()}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Foods;
