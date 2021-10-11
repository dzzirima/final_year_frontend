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
            <div className="tableDiv"> This is the table </div>

            <div>
                <TicketsTable/>
            </div>
            
        </div>
    )
}

export default DashBoard
