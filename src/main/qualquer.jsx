import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '../common/layout/grid'

const Qualquer = (props) => {
    <Grid cols='12 4'>
        <h1>Uma página qualquer como exemplo</h1>
        <Link to='/login'>
            <div className={`btn btn-primary`}>Login</div>
        </Link>
    </Grid>
}

export default Qualquer