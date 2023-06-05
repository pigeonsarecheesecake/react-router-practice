import './App.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Root from './Pages/Root';
import Products from './Pages/Products';


function App() {
  // Defines the routes
  const router = createBrowserRouter(createRoutesFromElements(
    // The reason why the children routes don't need '/' is because it's under the root path
    <Route path='/' element={<Root />}>
      {/* Index route is the default child route */}
      <Route index element={<HomePage/>}/>
      <Route path=':category' element={<Products/>}/>
      {/* <Route path=':category/:type' element={}/> */}
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
