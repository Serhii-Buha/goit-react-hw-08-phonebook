import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Button } from 'components/ContactList/ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilteredUser, getUsers } from 'redux/users/userSelectors';
import { deleteContact } from 'redux/users/operations';

export const ContactList = () => {
  const contactUser = useSelector(getUsers);
  const filteredUser = useSelector(getFilteredUser);
  const dispatch = useDispatch();

  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleContacts = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactListItem name={name} number={number} />

          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
