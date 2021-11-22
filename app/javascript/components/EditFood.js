import React from "react";

const EditFood = (props) => {
  return (
    <div>
      <h1>Edit Food Form for {props.actor.character}</h1>
      <form
        action={`/actors/${props.actor.id}/foods/${props.food.id}`}
        method="post"
      >
        <input type="hidden" dish="_method" value="patch" />
        <p>Dish</p>
        <input defaultValue={props.food.dish} dish="food[dish]" />
        <button type="submit">edit food</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default EditFood;
