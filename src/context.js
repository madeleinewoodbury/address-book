import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        street: "223 W. 57th St.",
        city: "New York",
        zipcode: "10019"
      },
      {
        id: 2,
        name: "Karen Smith",
        street: "101 Fairbanks Ave.",
        city: "Denver",
        zipcode: "34567"
      },
      {
        id: 3,
        name: "Andrew Johnson",
        street: "51 Billings St.",
        city: "Boston",
        zipcode: "52410"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
