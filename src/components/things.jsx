import { useState, useEffect } from "react";
//import { Link} from "react-router-dom"
import { retrieveAllPosts } from "../api";
import { timeHelper } from "./helpers";
import "../index.css";

const Things = () => {
  const [posting, setPosting] = useState([]);
  useEffect(()=>{
    const posts = async () => {
      const allPosts = await retrieveAllPosts()
      return allPosts;
    }
  posts()
    .then((allPosts) => setPosting(allPosts))
    .catch(console.error)
  }, [])
  
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
              {/* <div className="content-around">
                <Link to={{
                  pathname: `/mymessages`,
                  state: post._id
                  }}>
                  Send Message</Link>
              </div> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Things;
