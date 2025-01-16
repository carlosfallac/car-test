import { Model } from "../types";
import { List } from "../../../components/List";

interface ModelViewProps {
  readonly models: Model[];
}

export default function ModelView({ models }: ModelViewProps) {
  return <List data={models} />;
}
