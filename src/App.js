import SideBar from "./components/SideBar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AccountStatements from "./components/AccountStatements";
import Contacts from "./components/Contacts";
import TaxPayments from "./components/TaxPayments";
import VendorPayments from "./components/VendorPayments";
import PayoutLinks from "./components/PayoutsLinks";


function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<SideBar/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/account-statements',
          element:<AccountStatements/>
        },
        {
          path:'/contacts',
          element:<Contacts/>
        },
        {
          path:'/tax-payments',
          element:<TaxPayments/>
        },
        {
          path:'/vendor-payments',
          element:<VendorPayments/>
        },
        {
          path:'/payout-links',
          element:<PayoutLinks/>
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
