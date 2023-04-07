import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ContainerModal, ContainerInputName, Submit } from './styles';
import { changeUser } from '../../redux/userSlice';

export default function SignupModal() {
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    dispatch(changeUser(username));
    navigate('/home');
  }, [username]);

  return (
    <ContainerModal>
      <header>
        <h1>Welcome to CodeLeap network!</h1>
      </header>

      <ContainerInputName>
        <label htmlFor="name">Please enter your username
          <input type="text" id="name" onChange={(e) => setUserName(e.target.value)} value={username} />
        </label>
      </ContainerInputName>

      <Submit>
        <Button
          background="#7695EC"
          disabled={!username}
          label="Enter"
          onAction={handleLogin}
        />
      </Submit>
    </ContainerModal>
  );
}
