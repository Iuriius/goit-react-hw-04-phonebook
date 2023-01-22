import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts') || [])
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? toast.error(`${data.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const currentContacts = getContacts();

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Section>
        <Title>Phonebook</Title>
        <Form addNewContact={addNewContact} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={currentContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
