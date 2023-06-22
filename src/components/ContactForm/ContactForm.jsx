import React, { useState } from 'react';
import { Button } from './ContactForm.styled';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/userSelectors';
import { addContact, updateContact } from 'redux/users/operations';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const [user, setUser] = useState({ name: '', number: '' });
  const contactUser = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleInputNameChange = e => {
    setUser({ ...user, name: e.currentTarget.value });
  };

  const handleInputTelChange = e => {
    setUser({ ...user, number: e.currentTarget.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      // id: nanoid(),
      name: user.name,
      number: user.number,
    };

    if (
      contactUser.find(
        contact =>
          contact.name === newContact.name &&
          contact.number === newContact.number
      )
    ) {
      toast.error(`You have this contact`);
      return resetForm();
    }
    if (
      contactUser.find(
        contact =>
          contact.name === newContact.name ||
          contact.number === newContact.number
      )
    ) {
      newContact.id = contactUser.find(
        contact =>
          contact.name === newContact.name ||
          contact.number === newContact.number
      ).id;

      dispatch(updateContact(newContact));
      return resetForm();
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  const resetForm = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="formName">
        <Form.Label className="mb-2 fs-5">Name</Form.Label>
        <Form.Control
          className="mb-2"
          name="name"
          value={user.name}
          onChange={handleInputNameChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>
      <Form.Group controlId="formNumber">
        <Form.Label className="mb-2 fs-5">Number</Form.Label>
        <Form.Control
          className="mb-2"
          name="number"
          value={user.number}
          onChange={handleInputTelChange}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Group>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
