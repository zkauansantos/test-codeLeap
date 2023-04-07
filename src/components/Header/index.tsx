import { useSelector, useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './styles';
import { RootState } from '../../types/interfaces/RootState';
import { logout } from '../../redux/userSlice';

interface HeaderProps {
  title: string,
  height: string
  userActions?: boolean,
}

export default function Header({ title, height, userActions }: HeaderProps) {
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
        <div className="user-actions">
          <span>{name}</span>
          <BiLogOut onClick={() => handleLogout()} />
        </div>
      )}

    </ContainerHeader>
  );
}

Header.defaultProps = {
  userActions: false,
};
