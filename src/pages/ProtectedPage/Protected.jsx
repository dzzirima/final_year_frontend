import React from 'react'
import { Redirect, Route } from 'react-router-dom'
/**Only logged in user should see this page
 * otherwise  someone will get redirected to home page
 * 
 * ........................Implementation....................
 * 1 . we take the auth status
 * 2.the component that we want render
 * 3.other properties of the component  which include url ie path
 * 
 * <Route>
 *  <Switch>
 *       <ProtectedRoute path  ="/protect" component={ProtectedPage} auth={true}/>
 *   <Switch/>
 * <Route/>
 */

const ProtectedRoute = ({auth,component:Component ,...rest}) => {
  return (
    <Route {...rest} render = {(props)=>{
        if(auth) return  <Component{...props}/>

        {console.log(auth)}

        if(!auth) return <Redirect to={{path:"/" ,state:{from:props.location}}}/>
    }}/>
  )
}

export default ProtectedRoute