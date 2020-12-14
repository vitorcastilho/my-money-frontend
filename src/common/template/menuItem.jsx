import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i><span>{props.label}</span>
        </Link>
    </li>
)