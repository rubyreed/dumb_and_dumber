import React from "react";

const Food = (props) => {
  return (
    <div>
      <h1>Food Show</h1>
      <a href={`/actors/${props.food.actor_id}/foods`}>back</a>
      <p>food id: {props.food.id}</p>
      <p>actor id: {props.food.actor_id}</p>
      <div style={{ margin: "10px", border: "1px solid black" }}>
        <p>Dish: {props.food.dish}</p>
      </div>
      <code>{JSON.stringify(props)}</code>
    </div>
  );
};

export default Food;
