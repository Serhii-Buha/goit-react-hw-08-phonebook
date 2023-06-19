import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { fetchContacts } from 'redux/users/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getError, getIsLoading } from 'redux/users/userSelectors';
import { ContainerCustom, SpinStyle } from './ContactForm/ContactForm.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerCustom>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />

      <SpinStyle>
        {isLoading && !error && <InfinitySpin color="#4c2ef7" />}
      </SpinStyle>
    </ContainerCustom>
  );
};
