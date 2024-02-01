import { useRouter } from "next/router";

const Users = () => {
    const users= [
        {
        id: 1,
        name: "o",
        },
        {
            id:2,
            name: "a0",
        }
   
    ]
    const router = useRouter();
    return (
        <>
      <h1>Lista de usuarios</h1>
      {users.map( (user) => ( 
        <h3 key={user.id}>{user.name}</h3>
      ))}
      <button onClick={() => router.push('/')}>
        Home
      </button>
    </>
    );
  };
  
  export default Users;
  