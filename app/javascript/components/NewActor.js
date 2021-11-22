import React from "react";

const NewActor = (props) => {
  return (
    <div>
      <p>TODO: New actor form here</p>
      <a href="/">Home</a>
      <a href="/actors">Back to actors</a>
      <form action="/actors" method="post">
        <p>Character</p>
        <input character="actor[character]" />
        <button type="submit">add actor</button>
      </form>
    </div>
  );
};

export default NewActor;
