export const getUsers = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilteredUser = state => {
  const filterValue = state.filter.filterValue;
  if (typeof filterValue !== 'string') {
    return '';
  }
  return filterValue;
};
