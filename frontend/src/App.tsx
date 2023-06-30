import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components";

type User = {
  id: string;
  name: string;
};

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) return <p>Carregando...</p>;

  console.log({ data });

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <NewUserForm />
    </ul>
  );
}

export default App;
