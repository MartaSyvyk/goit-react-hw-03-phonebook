import React from 'react';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends React.Component {
  state = { 
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formHandler = data => {
    let isAdded = false;

    this.state.contacts.map(contact => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts!`);
        isAdded = true;
        
        return contact;
      }
      
      return contact;
    });

    this.setState(prevState => ({
      contacts:
        isAdded === true
          ? [...prevState.contacts]
          : [
              ...prevState.contacts,
              { id: nanoid(5), name: data.name, number: data.number },
            ],
    }));
  };

  onChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.filterHandler();
  };

  filterHandler = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
componentDidMount() {
const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
if (parsedContacts.length !== 0) {
  this.setState({
    contacts: parsedContacts,
  });}
  
}


componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  };
}
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formHandler} />
        <Filter filter={this.state.filter} handleChange={this.onChange} />
        <h2>Contacts</h2>

        {this.state.filter === '' ? (
          <ContactList
            data={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <ContactList
            data={this.filterHandler()}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
