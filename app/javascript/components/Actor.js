import React from "react";

const Actor = (props) => {
  return (
    <div>
      <p>TODO: List single actor here</p>
      <h1>{props.actor.character}</h1>
      <p>id: {props.actor.id}</p>
      <a href="/">Home</a>
      <a href="/actors">actors list</a>
    </div>
  );
};

export default Actor;
