import React from "react";
// import MaterialTable from 'material-table'
import MUIDataTable from "mui-datatables";
import './index.css'

import { TicketColumns } from "../../services/TableColumn";
import { tableOptions } from "../../services/TableColumn";
import { sampleTickets } from "../../services/sampleData";

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const TicketsTable = () => {
  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <MUIDataTable
          title={"Newly Created Tickets"}
          data={sampleTickets}
          columns={TicketColumns}
          options={tableOptions}
        />
      </div>
    </div>
  );
};

export default TicketsTable;
