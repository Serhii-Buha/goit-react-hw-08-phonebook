import PropTypes from 'prop-types';
import { List, Item, Button } from 'components/ContactList/ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactListItem name={name} number={number} />

          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

// В данном случае, функция onDeleteContact вызывается с использованием стрелочной функции (callback) в обработчике события onClick. Это делается по следующим причинам: Передача аргумента: Вам нужно передать id контакта в функцию onDeleteContact. Если вы напишете просто onClick={onDeleteContact(id)}, то функция будет вызвана сразу при рендере компонента, а не при клике на кнопку. Использование стрелочной функции позволяет передать аргумент и вызвать функцию только при событии клика.

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
