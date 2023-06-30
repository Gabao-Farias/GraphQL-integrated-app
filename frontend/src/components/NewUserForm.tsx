import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const handleCreateUser = async (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      return;
    }

    await createUser({
      variables: {
        name,
      },
    });
  };

  return (
    <form onSubmit={handleCreateUser}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default NewUserForm;
