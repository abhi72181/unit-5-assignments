import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Authcontext";

function Home() {
  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          handleAuth(false);
          navigate("/login");
        }}
      >
        logout
      </button>
    </>
  );
}

export default Home;
