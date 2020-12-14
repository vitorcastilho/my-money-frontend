import React from 'react'
import Navbar from './navbar'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className='logo-mini' ><b> My</b> M</span>
            <span className='logo-lg' >
                <i className='fa fa-money' ></i>
                <b> My</b> Money
            </span>
        </a>

        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)


// import React from 'react'

// export default props => (
//     <header className='main-header'>
//         <a href='/#/' className='logo'>
//             <span className='logo-mini'><b>My</b>M</span>
//             <span className='logo-lg'>
//                 <i className='fa fa-money'></i>
//                 <b> My</b> Money
//             </span>        
//         </a>
//         <nav className='navbar navbar-static-top'>
//             <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
//         </nav>
//     </header>
// )