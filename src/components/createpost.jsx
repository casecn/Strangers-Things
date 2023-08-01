import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPostEndpoint } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("Contact me");  
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log('TITLE: ', title);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("DESCRIPTION: ", description);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log( 'PRICE: ', price );
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log("Location: ", location);
  };
  const handlewillDeliverChange = (event) => {
    if (event.target.value === 'on') {
      setWillDeliver("true");
    } 
  };

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    //console.log("I have clicked a button");
    try {     
       if(title && price){
          const newToken = await createPostEndpoint(
            title,
            description,
            price,
            location,
            willDeliver
          );
          
          console.log(`new post:`, newToken)
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
            <div className="max-w-[450px] h-[600px] rounded mx-auto bg-black/80 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <label className="text-red-600  text-5xl">Login</label>
                <form className="w-full flex flex-col py-4">
                  <label className="text-white font-bold">Post Title:</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    className="p-3 my-2 rounded text-black"
                    placeholder="User Name"
                  />
                  <label className="text-white font-bold">Description:</label>
                  <input
                    type="text"
                    required
                    className="p-3 my-2 rounded text-black"
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                  />
                  <label className="text-white font-bold">Price:</label>
                  <input
                    type="number"
                    required
                    className="p-3 my-2 rounded text-black"
                    onChange={handlePriceChange}
                    placeholder="Price"
                  />
                  <input
                    type="text"
                    required
                    className="p-3 my-2 rounded text-black"
                    onChange={handleLocationChange}
                    placeholder="Location"
                  />
                  <label className="text-white font-bold">
                    Will Deliver:
                    <input
                      type="checkbox"
                      required
                      className="p-3 my-2 rounded text-black"
                      onChange={handlewillDeliverChange}
                    />
                  </label>
                  <button
                    type="submit"
                    onClick={handleSubmitButton}
                    className="bg-red-700 py-3 my-6 rounded font-bold px-4"
                  >
                    Log in
                  </button>
                  <div>
                    <Link to={`/things`}>Cancel</Link>
                    <Link to={`/Register`} className="float-right">
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
    return (
      <>
        <div className="flex-col p-4 rounded-lg bg-blue-100 text-black-600  text-2xl">
          <label>You must be logged in to create a post!</label>

          <div >
            <Link to={`/things`}>Home</Link>
          </div>
        </div>
      </>
    );
  }
};

export default CreatePost;
