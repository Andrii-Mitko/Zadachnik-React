interface UserProps {
  name: string;
  surn: string;
  age: number;
}

export default function User({ name, surn, age }: UserProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surn}</td>
      <td>{age}</td>
    </tr>
  );
}

// ******************************
// import clsx from "clsx";
// import css from "./User.module.css";

// interface UserData {
//   id: string;
//   name: string;
//   surname: string;
//   age: number;
//   isEdit: boolean;
// }

// interface UserProps {
//   user: UserData;
//   toggleMode: (id: string) => void;
//   editUser: (id: string, field: keyof UserData, value: string) => void;
// }

// export default function User({ user, toggleMode, editUser }: UserProps) {
//   return (
//     <li className={clsx(css.p)}>
//       <p>{user.id}</p>

//       <p>
//         name:
//         {user.isEdit ? (
//           <input
//             value={user.name}
//             onChange={(event) => editUser(user.id, "name", event.target.value)}
//           />
//         ) : (
//           <span>{user.name}</span>
//         )}
//       </p>

//       <p>
//         surname:
//         {user.isEdit ? (
//           <input
//             value={user.surname}
//             onChange={(event) =>
//               editUser(user.id, "surname", event.target.value)
//             }
//           />
//         ) : (
//           <span>{user.surname}</span>
//         )}
//       </p>

//       <p>
//         age:
//         {user.isEdit ? (
//           <input
//             value={user.age}
//             onChange={(event) => editUser(user.id, "age", event.target.value)}
//           />
//         ) : (
//           <span>{user.age}</span>
//         )}
//       </p>

//       <button type="button" onClick={() => toggleMode(user.id)}>
//         {user.isEdit ? "save" : "edit"}
//       </button>
//     </li>
//   );
// }
