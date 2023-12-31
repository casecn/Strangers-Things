import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerEndpoint } from "../api";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleUserChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    try {
      if(password && userName){
        await registerEndpoint(userName, password);
        console.log(`newToken`, localStorage.getItem("token"));
      }
    } catch (err) {
      console.error(err);
    }
    navigate("/mythings");
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[450px] rounded mx-auto bg-black/80 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <label className="text-red-600  text-3xl">
                Register for Stranger&apos;s Things
              </label>
              <form className="w-full flex flex-col py-4">
                <label className="text-white font-bold">User Name</label>
                <input
                  type="text"
                  required
                  onChange={handleUserChange}
                  className="p-3 my-2 rounded text-black"
                  placeholder="User Name"
                />
                <label className="text-white font-bold">Password</label>
                <input
                  type="password"
                  required
                  className="p-3 my-2 rounded text-black"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />

                <button
                  type="submit"
                  onClick={handleSubmitButton}
                  className="bg-red-700 py-3 my-6 rounded font-bold px-4"
                >
                  Register
                </button>
                <div>
                  <Link to={`/things`}>Cancel</Link>
                  <Link to={`/login`} className="float-right">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
