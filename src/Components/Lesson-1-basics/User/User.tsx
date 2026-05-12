// interface UserProps {
//   name: string;
//   surn: string;
//   age: number;
// }

import { nanoid } from "nanoid";

// export default function User({ name, surn, age }: UserProps) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{surn}</td>
//       <td>{age}</td>
//     </tr>
//   );
// }

// ******************************

interface InitUsers {
  id: string;
  name: string;
  surname: string;
  age: number;
}

export default function User() {
  const initUsers: InitUsers[] = [
    { id: nanoid(), name: "user1", surname: "surn1", age: 30 },
    { id: nanoid(), name: "user2", surname: "surn2", age: 31 },
    { id: nanoid(), name: "user3", surname: "surn3", age: 32 },
  ];
  return initUsers.map((item) => {
    return (
      <li key={item.id}>
        {item.name}, {item.surname}, {item.age}
      </li>
    );
  });
}
