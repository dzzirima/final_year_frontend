import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssingTech from "../components/AssignTechnician/AssingTech";

// option for all the table in the applications
export const tableOptions  = {
  filterType: "checkbox",
  responsive: "standard",
  selectableRows: "none",
  fixedHeader: true,
  fixedSelectColumn: true,
  rowsPerPage: 10,
  tableBodyHeight: "400px",
  downloadOptions: {
    filename: "DavidTZirima.csv",
  },
};

//tickects columns
 
 export const TicketColumns = [
    {
      name: "dateReported",
      label: "Report Date",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
  
    {
      name: "dateResolved",
      label: "Resolved Date",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "ticketId",
      label: "Ticket ID",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "Status",
      print: true,
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            <p className={value}>{value}</p>
          </>
        ),
      },
    },


    {
      name: "type",
      label: "Type",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "subject",
      label: "Subject",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "asignedTo",
      label: "Assigned To",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "ticketId",
      label: "Action",
      print: false,
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Link to={"/ticket/" + value}>
              <Button color = "primary" variant="outlined" startIcon={<RemoveRedEyeIcon />}>
                View
              </Button>
            </Link>
          </div>
        ),
      },
    },

    {
      name: "ticketId",
      label: "Action",
      print: false,
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
              <AssingTech/>
          </div>
        ),
      },
    },
  ];
// ....................................................................user columns............................
  export const UserColumns = [
    {
      name: "firstName",
      label: "First Name",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
  
    {
      name: "lastName",
      label: "Last NAme",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "phone",
      label: "Phone",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    // {
    //   name: "status",
    //   label: "Status",
    //   print: true,
    //   options: {
    //     filter: true,
    //     sort: true,
    //     customBodyRender: (value, tableMeta, updateValue) => (
    //       <>
    //         <p className={value}>{value}</p>
    //       </>
    //     ),
    //   },
    // },


    {
      name: "role",
      label: "Role",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    
  ];