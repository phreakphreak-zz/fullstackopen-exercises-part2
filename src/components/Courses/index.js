import React from "react";
import Course from "../Course";

const index = ({ courses }) => {
  return (
    <React.Fragment>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </React.Fragment>
  );
};

export default index;