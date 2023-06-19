export const localGetItems = () => {
  const storedContacts = localStorage.getItem('contacts');

  if (storedContacts !== null) {
    const parsedContacts = JSON.parse(storedContacts);
    return parsedContacts;
  }
  return [];
};
