
import './App.css';
import BlogCard from './components/BlogCard';
import Header from './components/Header';
import Login from './components/Login';
import Signin from './components/Signin';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './components/Main';
const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<Login/>,
},
{
  path:"/Signin",
  element:<Signin/>,
},
{
  path:"/Home",
  element:<Main/>,
  children:[
    {
      path:"Blog",
      element:<BlogCard/>
    }
  ]
}

])
function App() {
  return (
    <div className="container mx-auto bg-slate-100 font-[Poppins]">
       <RouterProvider router={appRouter} />
    </div>
  );
}


export default App;
