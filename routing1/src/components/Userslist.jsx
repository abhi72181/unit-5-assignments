import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const useQuery=(q)=>{
//   const param=new URLSearchParams(window.location.search);
//   return param.get(q)
// } creating custom hook

const Userslist = () => {
  const [users, setUsers] = useState([]);
  console.log(useQuery("page"))
  useEffect(() => {
    const getData = async () => {
      let data = await fetch("http://reqres.in/api/users?page=2");
      data = await data.json();
      setUsers(data.data);
    };
    getData();
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((e) => {
        return <p key={e.id}>
            <Link to={`/users/${e.id}`}>
                {e.id}.{e.first_name}
            </Link>
        </p>;
      })}
    </div>
  );
};

export default Userslist;
