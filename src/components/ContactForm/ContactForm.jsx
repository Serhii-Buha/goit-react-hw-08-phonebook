import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Form } from 'react-bootstrap';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    // после деструктурезации это if ('name' === 'name') setName(value);
    if (name === 'number') setNumber(value);
    // после деструктурезации это if ('number' === 'number') setNumber(value);

    // const { name, value } = event.currentTarget;
    // т.е. текущий инпут деструктурезируется его name т.е. либо 'name' или 'number' и значение value это либо  [name, setName] = useState(''); либо [number, setNumber] = useState('');

    // const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(name, number);

    onSubmit({ name, number });
    // // this.props.onSubmit(this.state);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');

    // this.setState({
    //   name: '',
    //   number: '',
    // });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label className="mb-2 fs-5">Name</Form.Label>
        <Form.Control
          className="mb-2"
          name="name"
          value={name}
          onChange={handleInputChange}
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
          value={number}
          onChange={handleInputChange}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label className="mb-2 fs-5">Name</Form.Label>
//           <Form.Control
//             className="mb-2"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="formNumber">
//           <Form.Label className="mb-2 fs-5">Number</Form.Label>
//           <Form.Control
//             className="mb-2"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Form.Group>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
