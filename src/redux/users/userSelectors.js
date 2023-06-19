export const getUsers = state => state.users.users;

export const getFilteredUser = state => {
  const filterValue = state.filter.filterValue;
  if (typeof filterValue !== 'string') {
    return '';
  }
  return filterValue;
};
