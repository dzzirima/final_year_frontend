import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const WeightMonths = ({title,data,dataKey,grid}) => {

    

    return (
        <div className ="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer widtg = "100%" aspect = {4/1}>
                <LineChart data = {data}>
                    <XAxis dataKey="name"  stroke ="#5550bd" label={{ value: 'Month', angle: 360, position: 'insideLeft', textAnchor: 'bottom' }}/>
                    <YAxis label={{ value: 'Weight', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Line type= "monotone" dataKey = {dataKey} stroke = "#5550bd"/>
                    
                    {grid &&<CartesianGrid stroke ="#e0dfdf"/>}

                </LineChart>

            </ResponsiveContainer>
            
        </div>
    )
}

export default WeightMonths


