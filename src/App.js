import React, { useState } from "react";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState[
    {
      persons: [
        { name: "Max", age: 16 },
        { name: "Manu", age: 23 },
        { name: "Alex", age: 15 }
      ]
    }
  ];

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 16 },
        { name: "Manu", age: 23 },
        { name: "Alex", age: 26 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>App component!</h1>
      <p> This is working! </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Mi Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { name: "Max", age: 16 },
//     { name: "Manu", age: 23 },
//     { name: "Alex", age: 15 }
//   ],
//   otherValue: "dada"
// };

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 16 },
//       { name: "Manu", age: 23 },
//       { name: "Alex", age: 26 }
//     ]
//   });
// };
