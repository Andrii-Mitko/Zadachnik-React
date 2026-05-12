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

export default function User() {
  initUser.map((item) => {
    return <li key={initUsers.id}></li>;
  });
}
