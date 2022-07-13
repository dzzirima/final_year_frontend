import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssingTech from "../components/AssignTechnician/AssingTech";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { users as myoptions } from "./sampleData";
import { toast } from "react-toastify";

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
      name: "createdAt",
      label: "Date",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "_id",
      label: "RecordId",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "doctorId",
      label: "NurseID",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "bcg",
      label: "BCG",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "polio",
      label: "Polio",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },

  
    {
      name: "dpt",
      label: "DPT",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
   
    {
      name: "hbv",
      label: "HBV",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "measles",
      label: "measles",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "covid",
      label: "COVID",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "weight",
      label: "WEIGHT",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "height",
      label: "HEIGHT",
      print: true,
      options: {
        filter: true,
        sort: false,
      },
    },
   

    {
      name: "recordId",
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

   
    
  ];
// ....................................................................user columns............................
  export const UserColumns = [

    {
      name: "Id",
      label: "User ID",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "firstname",
      label: "First Name",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
  
    {
      name: "lastname",
      label: "Last Name",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    // {
    //   name: "verified",
    //   label: "Verified",
    //   print: true,
    //   options: {
    //     filter: true,
    //     print: true,
    //     sort: false,
    //   },
    // },
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

  /***Doctors Columns */
  export const doctorColumns = [
    {
      name: "firstname",
      label: "First Name",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastname",
      label: "Last Name",
      print: true,
      options: {
        filter: true,
        sort: true,
      },
    },
  
    {
      name: "gender",
      label: "Gender",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    {
      name: "dob",
      label: "Date Of Birth",
      print: true,
      options: {
        filter: true,
        print: true,
        sort: false,
      },
    },
    // {
    //   name: "status",
    //   label: "Sharing status",
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
      name: "recordID",
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

    
  ];

  export const pharmacistColumns = [
   
  {
    name: "recordId",
    label: "Record ID",
    print: true,
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "doctorId",
    label: "Prescriber ID",
    print: true,
    options: {
      filter: true,
      sort: true,
    },
  },
  
  {
    name: "myprescribedDate",
    label: "Prescribed  Date",
    print: true,
    options: {
      filter: true,
      print: true,
      sort: false,
    },
  },
  {
    name: "doctorId",
    label: "Approved Collections",
    print: true,
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "myprescribedDate",
    label: "Collected Date",
    print: true,
    options: {
      filter: true,
      print: true,
      sort: false,
    },
  },
  {
    name: "myquantityPrescribed",
    label: "Quantity",
    print: true,
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "drugDescription",
    label: "Drug Description",
    print: true,
    options: {
      filter: true,
      sort: false,
    },
  },
    
   

    {
      name: "recordId",
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
      name: "recordId",
      label: "Action",
      print: false,
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            
              <Button color = "primary" id= {value} variant="outlined" startIcon={<CheckCircleIcon />} onClick ={(e) =>{
                let recordId = e.target.id
                console.log(e.target.id)
                toast.success("You take credit for the collecton of this prescription")
              }}>
                Cornfirm Collection
              </Button>
            
          </div>
        ),
      },
    },

    
  ];