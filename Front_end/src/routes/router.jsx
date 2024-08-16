import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Logout from '../pages/Logout/Logout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <Homepage />,
      },
    ],
  },
]);
