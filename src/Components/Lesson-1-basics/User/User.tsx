// interface UserProps {
//   name: string;
//   surn: string;
//   age: number;
// }

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

interface UserData {
  id: string;
  name: string;
  surname: string;
  age: number;
}

interface UserProps {
  user: UserData;
}

export default function User({ user }: UserProps) {
  return (
    <li>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <p>{user.age}</p>
    </li>
  );
}
