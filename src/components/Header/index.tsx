import { ContainerHeader } from './styles';

interface HeaderProps {
  title: string,
  height: string
}

export default function Header({ title, height }: HeaderProps) {
  return (
    <ContainerHeader height={height}>
      <h1>{title}</h1>
    </ContainerHeader>
  );
}
