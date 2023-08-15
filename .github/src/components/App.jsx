import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {AppWrapper} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, newContact]
    }));
  };
  
  newContact = evt => {
    const search = evt.currentTarget.value;
    this.setState({filter: search})

  }

  deleteContact = contactId =>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render()
  
  {
    const { contacts, filter } = this.state;
    const selectedContact = filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;
    return (
      <AppWrapper >
        <ContactForm addContact={this.addContact}/>
     
        <Filter filter={filter} newContact={this.newContact}/>
        <ContactsList selectedContact={selectedContact} deleteContact={this.deleteContact}/>
      </AppWrapper>
    )
  }
};
