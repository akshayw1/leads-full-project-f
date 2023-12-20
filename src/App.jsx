import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Pricing from './components/pricing/Pricing';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/pricing', element: <Pricing /> },
    ],
  },
];

const router = (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
      {/* <Route path="*" Component={FourZeroFour} /> */}
    </Routes>
  </BrowserRouter>
);

function App() {
  return router;
}
export default App;
