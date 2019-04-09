import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;

    // Filter out the contact to delete
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="container">
                <h1 className="display-4 mb-2 text-center">Contacts</h1>
                {contacts.map(contact => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    deleteClickHandler={this.deleteContact.bind(
                      this,
                      contact.id
                    )}
                  />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
