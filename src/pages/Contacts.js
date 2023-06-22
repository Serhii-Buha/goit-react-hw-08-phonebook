import { useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/users/userSelectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  ContainerCustom,
  SpinStyle,
} from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/users/operations';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContainerCustom>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />

        <SpinStyle>
          {isLoading && !error && <InfinitySpin color="#444654" />}
        </SpinStyle>
      </ContainerCustom>
    </>
  );
};

export default Contacts;
