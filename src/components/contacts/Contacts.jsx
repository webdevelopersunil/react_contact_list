import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  // For listing all the contacts in the API

  render() {
    return (
      <React.Fragment>
        <h1 className="mb-3">
          <span className="text-dark">Contact List</span> 
        </h1>
        {this.props.contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
