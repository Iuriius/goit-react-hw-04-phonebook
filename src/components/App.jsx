import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addNewContact(data) {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    toast.success(`${data.name} added`);
    contacts.some(({ name }) => name === data.name)
      ? toast.error(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  }

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  function getContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

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
