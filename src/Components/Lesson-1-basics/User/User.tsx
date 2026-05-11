interface UserProps {
  name: string;
  lastName: string;
  age: number;
}

export default function User({ name, lastName, age }: UserProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{age}</td>
    </tr>
  );
}
