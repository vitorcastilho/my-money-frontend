import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

// components
import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

// import Qualquer from './qualquer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' content={Dashboard} />
            <Route path='/dashboard2' component={Dashboard2} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/'/>
        </Switch>
    </div>

    // <Router history={hashHistory}>
    //     <Route path='/login' component={AuthOrApp}>
    //         <IndexRoute component={Dashboard} />
    //         <Route path='/dashboard' component={Dashboard} />
    //         <Route path='/dashboard2' component={Dashboard2} />
    //         <Route path='/billingCycles' component={BillingCycle} />
    //     </Route>
    //     <Route path='/' component={Qualquer}/>
    //     <Redirect from='*' to='/' />
    // </Router>
}