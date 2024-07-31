import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage/Homepage';
import Profile from '../pages/Profile/Profile';
import SignIn from '../pages/SignIn/SignIn';

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
        path: '/signin',
        element: <SignIn />,
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
