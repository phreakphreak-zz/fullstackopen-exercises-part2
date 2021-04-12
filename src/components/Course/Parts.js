import React from "react";
import Part from "./Part";

const Parts = ({ parts }) => {
  return (
    <React.Fragment>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
    </React.Fragment>
  );
};

export default Parts;