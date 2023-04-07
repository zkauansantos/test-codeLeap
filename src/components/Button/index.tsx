import { ButtonStyled } from './styles';

interface ButtonProps {
  label: string
  onAction?: () => void
  disabled: boolean
}

export default function Button({ label, onAction, disabled }: ButtonProps) {
  return (
    <ButtonStyled type="button" disabled={disabled} onClick={onAction}>{label}</ButtonStyled>
  );
}

Button.defaultProps = {
  onAction: () => {},
};
