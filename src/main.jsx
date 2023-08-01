import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Things from "./components/things";
import Login from './components/login';
import Register from './components/Register';
import Logout from "./components/logout";
import MyThings from "./components/mythings";
import CreatePost from './components/createpost';
//import Messages from "./components/messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/things",
        element: <Things />,
      },
      {
        path: "/mythings",
        element: <MyThings />,
      },
      {
        path: "/createpost",
        element: <CreatePost />,
      },
    //   // {
    //   //   path: "/messages",
    //   //   element: <Messages />,
    //   // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
