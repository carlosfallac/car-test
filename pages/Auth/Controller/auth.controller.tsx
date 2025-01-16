import AuthContext from "../../../context/Auth";
import { useContext } from "react";
import AuthView from "../View/auth.view";

type FormData = {
  user: string;
  password: string;
};

export default function App() {
  const { Login, error } = useContext(AuthContext);

  const onSubmit = (data: FormData) => {
    Login(data);
  };

  return <AuthView onSubmit={onSubmit} error={error} />;
}
