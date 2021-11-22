import React from "react";

const NewFood = (props) => {
  return (
    <div>
      <h1>New food Form for {props.actor.character}</h1>
      <form action={`/actors/${props.actor.id}/foods`} method="post">
        <p>Dish</p>
        <input dish="food[dish]" />
        <button type="submit">add food</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default NewFood;
