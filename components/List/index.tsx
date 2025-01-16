import { FlatList } from "react-native";
import { Container, Title } from "./style";
import { Button } from "../Button";

interface ListProps {
  readonly data: Array<{ codigo: string; nome: string }>;
  readonly button: boolean | null;
  readonly handleNavigate: (brandId: string) => void | null;
}

export function List({ data, button, handleNavigate }: ListProps) {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          button ? (
            <Button item={item} handle={handleNavigate} />
          ) : (
            <Title>{item.nome}</Title>
          )
        }
      />
    </Container>
  );
}
