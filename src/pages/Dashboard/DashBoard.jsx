import React, { useState } from 'react'
import Summary from '../../components/Summary/Summary'
import './index.css'

const DashBoard = () => {
    const [cost, setcost] = useState(0)
    return (
        <div className = "mainDashBoard">
            <div className="mainSummaryContainer"> 
            <Summary/>
            <Summary/>
            <Summary/>
            <Summary/>
            </div>
            <div className="tableDiv"> This is the table </div>
            
        </div>
    )
}

export default DashBoard
