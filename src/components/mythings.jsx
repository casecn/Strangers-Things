import { useState, useEffect } from "react";
import { retrieveMyPosts, deletePost } from "../api";
import { timeHelper } from "./helpers";
import { useNavigate } from "react-router-dom";

import "../index.css";



const MyThings = () => {
  const [posting, setPosting] = useState([]);
  const navigate = useNavigate();
  useEffect( ()=>{
    //const posts = async () => {
      updatePosts();
  //     const allPosts = await retrieveMyPosts();
  //     return allPosts;
  //   }
  // posts()
  //   .then((allPosts) => setPosting(allPosts))
    
  //   .catch(console.error)
  }, [])
  
  const updatePosts = async () => {
    const allPosts = await retrieveMyPosts();
    setPosting(allPosts)
  }

  const handleDelete =  async (id) => { 
    event.preventDefault
    try{
      await deletePost(id)
      await updatePosts();
    } catch (error) {
      console.log(error);
    }
    navigate("/mythings")
  }

  return (
    <>
      <div id="posts">
        {posting &&
          posting.map((post) => (
            <div key={post._id} className="post-thing">
              <h1>{post.title}</h1>
              <p>{post.author.username}</p>
              <div className="">{post.description}</div>
              <p>{post.price}</p>
              <p>{`Posted: ${timeHelper(post.createdAt)}`}</p>
              <div className="content-around">
                <button
                  type="submit"
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-300 text-slate-700 py-1 my-6 rounded font-bold px-4"
                >
                  Deleate Post
                </button>
                <button
                  type="submit"
                  onClick={console.log("hi")}
                  className="bg-green-300 text-slate-700 py-1 my-6 rounded font-bold px-4"
                >
                  Edit Post
                </button>
              </div>
            </div>
          ))} 
      </div>
    </>
  );
};

export default MyThings;
