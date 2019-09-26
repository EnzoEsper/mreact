import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        Im {props.name} and i am {props.age} years old!
      </p>
      {/*children refers to any elements between the open an closing tab of our component!*/}
      <p> {props.children}</p>
    </div>
  );
};

export default Person;
