import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Profilepage from './Profilepage.jsx';
import Sign_in from './Sign_in.jsx';
import Sign_up from './Sign_up.jsx';
import Leaderboard_page from './Leaderboard_page.jsx';
import Inferopage from './club_pages/Infero.jsx';
import Play_page from './Play_page.jsx';
import Infero_question from './club_pages/Infero_question.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profilepage />,
  },
  {
    path: "/sign-in",
    element: <Sign_in />,
  },
  {
    path: "/sign-up",
    element: <Sign_up />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard_page />,
  },
  {
    path: "/infero",
    element: <Inferopage />,
  },    
  {
    path : "/play",
    element : <Play_page/>
  },
  {
    path : "/play/Infero",
    element: <Infero_question/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
