import { ButtonStyled } from './styles';

interface ButtonProps {
  label: string
  onAction?: () => void
  disabled?: boolean
  background: string
}

export default function Button({ label, onAction, disabled, background }: ButtonProps) {
  return (
    <ButtonStyled
      bg={background}
      disabled={disabled}
      onClick={onAction}
    >
      {label}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  onAction: () => {},
  disabled: false,
};
