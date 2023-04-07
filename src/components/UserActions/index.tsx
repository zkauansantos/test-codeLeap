import { ContainerActions } from './styles';

interface UserActionsProps {
  children: React.ReactNode
}

export default function UserActions({ children }: UserActionsProps) {
  return (
    <ContainerActions>
      {children}
    </ContainerActions>
  );
}
