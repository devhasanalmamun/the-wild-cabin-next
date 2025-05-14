interface IUser {
  id: number;
  name: string;
}

export default async function UserList() {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((user: IUser) => (
        <li key={user.id}>{user?.name} </li>
      ))}
    </ul>
  );
}
