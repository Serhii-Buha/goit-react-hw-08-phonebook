import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import IconButton from '@mui/material/IconButton';
import { P, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <P>Welcome, {user.name}</P>

      <IconButton type="button" onClick={() => dispatch(logOut())}>
        <MeetingRoomIcon />
      </IconButton>
    </Wrapper>
  );
};
