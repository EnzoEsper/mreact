import React from "react";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 16 },
      { name: "Manu", age: 23 },
      { name: "Alex", age: 15 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 16 },
        { name: "Manu", age: 23 },
        { name: "Alex", age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>App component!</h1>
        <p> This is working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        >
          Mi Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

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
