import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';
import './styles/App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/calculator',
      element: <Calculator />,
    },
    {
      path: '/quotes',
      element: <Quote />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
