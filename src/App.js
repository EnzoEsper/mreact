import React from "react";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 16 },
      { name: "Manu", age: 23 },
      { name: "Alex", age: 15 }
    ],
    otherState: "Another value",
    showPersons: false
  };

  switchNameHandler = name => {
    this.setState({
      persons: [
        { name: name, age: 16 },
        { name: "Manu", age: 23 },
        { name: "Alex", age: 26 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 16 },
        { name: event.target.value, age: 23 },
        { name: "Alex", age: 15 }
      ]
    });
  };

  togglePersonsHandler = () => {
    // capturing the showpersons state and toggle its value whenever clicks the button
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>App component!</h1>
        <p> This is working! </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/*}
        Alterantive way to the button onClick function from above
        <button onClick={() => this.switchNameHandler("Maximilian")}>
          Switch Name
        </button>
        {*/}

        {/*} ternary expression to render the components conditionally{*/}
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}
            >
              Mi Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
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
