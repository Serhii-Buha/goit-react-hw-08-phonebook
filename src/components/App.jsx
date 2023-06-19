import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './ContactForm/ContactForm.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { localGetItems } from '../utils/localGetItems';

export const App = () => {
  const [contacts, setContacts] = useState(localGetItems);

  //v2
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');

  //   if (storedContacts !== null) {
  //     const parsedContacts = JSON.parse(storedContacts);

  //     if (Array.isArray(parsedContacts)) {
  //       setContacts(parsedContacts);
  //     }
  //   } else {
  //     setContacts([]);
  //   }
  // }, []);

  // componentDidMount() {
  // const contacts = localStorage.getItem('contacts');

  // if (contacts !== null) {
  //   const parsedContacts = JSON.parse(contacts);
  //   this.setState({ contacts: parsedContacts });
  //   return;
  // }
  // this.setState({ contacts: [] });
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    //
  }, [contacts]);

  // componentDidUpdate(prevProps, prevState) {
  // if (this.state.contacts !== prevState.contacts) {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }
  // }

  // const formSubmitHandler = ({ name = '', number = '' } = {}) =>

  const formSubmitHandler = data => {
    // console.log(data);

    // const { contacts } = this.state;
    const isExist = contacts.some(contact => contact.name === data.name);

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);

    // this.setState(prevState => ({
    //   contacts: [newContact, ...prevState.contacts],
    // }));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);

    // this.setState({
    //   filter: e.currentTarget.value,
    // });
  };

  const getVisibleFilter = () => {
    // const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(todo =>
      todo.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );

    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));
  };

  const filteredContacts = getVisibleFilter();

  // render() {
  //   const filterContacts = this.getVisibleFilter();
  //   const { contacts } = this.state;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');

//     if (contacts !== null) {
//       const parsedContacts = JSON.parse(contacts);
//       this.setState({ contacts: parsedContacts });
//       return;
//     }
//     this.setState({ contacts: [] });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = data => {
//     console.log(data);

//     const { contacts } = this.state;
//     const isExist = contacts.some(contact => contact.name === data.name);

//     if (isExist) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };

//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   getVisibleFilter = () => {
//     const { contacts, filter } = this.state;

//     const normalizeFilter = filter.toLowerCase();

//     return contacts.filter(todo =>
//       todo.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const filterContacts = this.getVisibleFilter();
//     const { contacts } = this.state;

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />

//         {contacts.length > 0 && (
//           <ContactList
//             contacts={filterContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         )}
//       </Container>
//     );
//   }
// }
