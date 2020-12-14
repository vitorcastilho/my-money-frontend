import React from 'react'
import { HashRouter } from 'react-router-dom'

// components
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import '../common/template/dependencies'

//Routes
import Routes from './routes'

// Messages
import Messages from '../common/msg/messages'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            <Messages />
        </div>

    </HashRouter>
)