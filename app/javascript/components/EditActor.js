import React from "react";

const EditActor = (props) => {
  return (
    <div>
      <p>TODO: Edit actor form here</p>
      <a href="/">Home</a>
      <a href="/actors">Back to actors</a>
      <form action={`/actors/${props.actor.id}`} method="post">
        <input type="hidden" character="_method" value="patch" />
        <p>character</p>
        <input defaultValue={props.actor.character} character="actor[character]" />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditActor;
