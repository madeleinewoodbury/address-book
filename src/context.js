import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],

    // Calls the action from the reducer
    dispatch: action => this.setState(state => reducer(state, action))
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
