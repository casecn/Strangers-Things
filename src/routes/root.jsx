import { Outlet, Link, Form } from "react-router-dom"
import { useState } from "React"



const Root = () => {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState({
    query: '', 
    list: []
  })

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <>
      <div id="sidebar">
        <h1 id="title">Stranger&apos;s Things</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              value={query} onChange={handleSearchChange}
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav className="flex flex-col space-y-4">
          <ul>
            <li>
              <Link to={`/things`}>All Posts</Link>
            </li>
            <li>
              <Link to={`/mythings`}>My Posts</Link>
            </li>
            <li>
              <Link to={`/createpost`}>Create a Post</Link>
            </li>
            <li>
              <Link to={`/login`}>Log in</Link>
            </li>
            <li>
              <Link to={`/register`}>Register New User</Link>
            </li>
          </ul>
          <ul className="bottom-7">
            <li id="logout">
              <Link to={`/logout`}>Log Out</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
export default Root;