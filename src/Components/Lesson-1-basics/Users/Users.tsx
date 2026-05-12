import { nanoid } from "nanoid";
import User from "../User/User";

type UserData = {
  id: string;
  name: string;
  surname: string;
  age: number;
};

const users: UserData[] = [
  { id: nanoid(), name: "user1", surname: "surn1", age: 30 },
  { id: nanoid(), name: "user2", surname: "surn2", age: 31 },
  { id: nanoid(), name: "user3", surname: "surn3", age: 32 },
];

export default function Users() {
  return (
    <ul>
      {users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </ul>
  );
}
