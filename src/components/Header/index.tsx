import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './styles';
import UserActions from '../UserActions';
import { logout } from '../../redux/userSlice';
import { RootState } from '../../types/interfaces/RootState';

interface HeaderProps {
  title: string,
  height: string
  userActions?: boolean,
  children?: React.ReactNode
}

export default function Header({
  title, height, userActions, children,
}: HeaderProps) {
  const { name } = useSelector(({ user }: RootState) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate('/', { replace: true });
  }

  return (
    <ContainerHeader height={height}>
      <h1>{title}</h1>

      {userActions && (
        <UserActions>
          <span>{name}</span>
          <BiLogOut onClick={() => handleLogout()} />
        </UserActions>
      )}
      {children}
    </ContainerHeader>
  );
}

Header.defaultProps = {
  userActions: false,
  children: null,
};
