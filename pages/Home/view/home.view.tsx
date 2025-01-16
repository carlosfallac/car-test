import React from "react";
import { Brands } from "../types";
import { Container } from "./style";
import { List } from "../../../components/List";

interface HomeViewProps {
  readonly brands: Brands[];
  readonly handleNavigate: (brandId: string) => void;
}

export default function HomeView({ brands, handleNavigate }: HomeViewProps) {
  return (
    <Container>
      <List button={true} data={brands} handleNavigate={handleNavigate} />
    </Container>
  );
}
