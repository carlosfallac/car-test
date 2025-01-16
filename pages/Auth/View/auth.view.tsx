import { useForm, Controller } from "react-hook-form";
import { Container, Error, Input } from "./style";
import { Button } from "react-native";

interface FormData {
  user: string;
  password: string;
}

interface AuthViewProps {
  readonly onSubmit: (data: FormData) => void;
  readonly error: boolean;
}

export default function AuthView({ onSubmit, error }: AuthViewProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user: "",
      password: "",
    },
  });
  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input placeholder="Usuário" onChangeText={onChange} value={value} />
        )}
        name="user"
      />
      {errors.user && <Error>This is required.</Error>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input placeholder="Senha" onChangeText={onChange} value={value} />
        )}
        name="password"
      />
      {errors.password && <Error>This is required.</Error>}

      <Button color="#5C8374" title="Enviar" onPress={handleSubmit(onSubmit)} />

      {error && <Error>Usuário e/ou senha inválido(s).</Error>}
    </Container>
  );
}
