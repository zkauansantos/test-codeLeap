import { ButtonStyled } from './styles';

interface ButtonProps {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <ButtonStyled>{label}</ButtonStyled>
  );
}
