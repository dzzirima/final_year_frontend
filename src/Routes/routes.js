import TicketDetails from "../components/TicketDetails/TicketDetails";
import DashBoard from "../pages/Dashboard/DashBoard";
import Settings from "../pages/Settings/Settings";
import Tickets from "../pages/Tickets/Tickets";
import Users from "../pages/Users/Users";

export   const routes = [
    {
      path: "/",
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
    
  ];

  