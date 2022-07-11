import SignInSide from "../components/login/login";
import TicketDetails from "../components/TicketDetails/TicketDetails";
import DashBoard from "../pages/Dashboard/DashBoard";
import PhamacistDashBoard from "../pages/DashboardPhamacist/PhamacistDashBoard";
import DoctorDashBoard from "../pages/DoctorDashBoard/DoctorsDashBoard";
import Protected from "../pages/ProtectedPage/Protected";
import Settings from "../pages/Settings/Settings";
import Tickets from "../pages/Tickets/Tickets";
import Users from "../pages/Users/Users";
import ProtectedRoute from "../pages/ProtectedPage/Protected";

export   const routes = [
  {
    path: "/",
    component:<SignInSide/>
    
  },
    {
      path: "/patient",
      component:<DashBoard/>
      
    },
    {
      path: "/settings",
      component:<Settings/>
      
    },
    {
        path: "/tickets",
        component:<Tickets/>
        
      },
      {
        path: "/users",
        component:<Users/>
        
      },
      {
        path: "/ticket/:ticketId",
        component:<TicketDetails/>
        
      },
      {
        path: "/nurse",
        component:<DoctorDashBoard/>
        
      },
      {
        path: "/phamacist",
        component:<PhamacistDashBoard/>
      },
      

    
  ];

  