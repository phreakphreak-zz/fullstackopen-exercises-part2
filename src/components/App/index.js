import React from "react";
import Header from "./Header";
import Content from "./Content";
import courses from "../../services/getCourses";

const App = () => {
  return (
    <div>
      <Header title={"Web Development Curriculum"} />
      <Content courses={courses} />
    </div>
  );
};

export default App;
