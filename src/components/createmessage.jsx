import { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import { createMessage } from "../api";

const Message = ( postId, postAuthor ) => {
  
  const [message, setMessage ] = useState('');
  const [author, setAuthor] = useState("");
  
  const navigate = useNavigate();

  setAuthor(postAuthor);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  const handleSubmitButton = async (event) => {
    event.preventDefault(); //DO NOT FORGET THIS
    try {
      if (message && author !== localStorage.getItem("userName")) {
        
        await createMessage();
        console.log(`newToken`, localStorage.getItem("token"));
      }
    } catch (err) {
      console.error(err);
    }
    navigate("/mythings");
  };


  if (localStorage.getItem("token")) {
    return (
      <>
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[450px] rounded mx-auto bg-black/80 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <label className="text-red-600  text-5xl">Login</label>
                <form className="w-full flex flex-col py-4">
                  <label className="text-white font-bold">User Name</label>
                  <input
                    type="text"
                    required
                    onChange={handleMessageChange}
                    className="p-3 my-2 rounded text-black"
                    placeholder="User Name"
                  />

                  <button
                    type="submit"
                    onClick={handleSubmitButton}
                    className="bg-red-700 py-3 my-6 rounded font-bold px-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex-col p-4 rounded-lg bg-blue-100 text-black-600  text-2xl">
          <label>You must be logged in to send a message!</label>

          <div>
            <Link to={`/things`}>Home</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Message;

