import React from "react";

const Actors = (props) => {
  // props.actors = [{id,character}, {id,character}, {id,character},]
  const renderActors = () => {
    return props.actors.map((actor) => {
      return (
        <div className="actor-container">
          <p>ID: {actor.id}</p>
          <p>Character: {actor.character}</p>
          <p>Quote: {actor.quote}</p>
          <a href={`/actors/${actor.id}`}>Show Actor&nbsp;&nbsp;&nbsp;</a>
          <a href={`/actors/${actor.id}/foods`}>Foods Index&nbsp;&nbsp;&nbsp;</a>
          <a href={`/actors/${actor.id}/edit`}>Edit Actor&nbsp;&nbsp;&nbsp;</a>
          <a href={`/actors/${actor.id}`} data-method="delete">Delete</a>
        </div>
      );
    });
  };
  return (
    <div>
      <a href="/">Home</a>
      <a href="/actors/new">New Actor</a>
      <p>List Actors Here</p>
      {renderActors()}

      {/* need to make id dynamic hardcoding to 1 for now */}
    </div>
  );
};

export default Actors;
