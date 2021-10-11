import { Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import Summary from '../../components/Summary/Summary'
import TicketsTable from '../../components/TicketsTable/TicketsTable'
import './index.css'

const DashBoard = () => {
    const [cost, setcost] = useState(0)
    return (
        <div className = "mainDashBoard">
            <div className="mainSummaryContainer"> 
            <Summary name = "New Tickets" value ={5} />
            <Summary name = "In Progress"  value = {10}/>
            <Summary name= "Resolved" value = {20}/>
            <Summary name = "Total" value = {35}/>
            </div>
            <Divider sx ={{my:2}}>  <Typography variant ="subtitle1">  Newly  Created Tickets </Typography>  </Divider>
            <div>
                <TicketsTable/>
            </div>
            
        </div>
    )
}

export default DashBoard
