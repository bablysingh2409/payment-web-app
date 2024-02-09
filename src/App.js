import SideBar from "./components/SideBar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<SideBar/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    }
  ])

  return (
    <div className="flex bg-[#0C2D57]">
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
  );
}

export default App;
