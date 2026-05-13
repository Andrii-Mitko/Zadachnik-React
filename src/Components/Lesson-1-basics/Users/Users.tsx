import { nanoid } from "nanoid";
import { useState } from "react";
import User from "../User/User";

export type UserData = {
  id: string;
  name: string;
  surname: string;
  age: number;
  isEdit: boolean;
};

const initialUsers: UserData[] = [
  {
    id: nanoid(),
    name: "user1",
    surname: "surn1",
    age: 30,
    isEdit: false,
  },
  {
    id: nanoid(),
    name: "user2",
    surname: "surn2",
    age: 31,
    isEdit: false,
  },
  {
    id: nanoid(),
    name: "user3",
    surname: "surn3",
    age: 32,
    isEdit: false,
  },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);

  const editUser = (id: string, field: keyof UserData, value: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              [field]: field === "age" ? Number(value) : value,
            }
          : user,
      ),
    );
  };

  const toggleMode = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isEdit: !user.isEdit } : user,
      ),
    );
  };

  return (
    <ul>
      {users.map((item) => (
        <User
          key={item.id}
          user={item}
          toggleMode={toggleMode}
          editUser={editUser}
        />
      ))}
    </ul>
  );
}
