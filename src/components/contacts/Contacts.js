import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="display-4 mb-2 text-center">Contacts</h1>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Contacts;
