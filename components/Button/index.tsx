import { Title, Touch } from "./style";

interface Item {
  codigo: string;
  nome: string;
}

interface ButtonProps {
  readonly item: Item;
  readonly handle: (codigo: string) => void;
}

export function Button({ item, handle }: ButtonProps) {
  return (
    <Touch onPress={() => handle(item.codigo)}>
      <Title>{item.nome}</Title>
    </Touch>
  );
}
