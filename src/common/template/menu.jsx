import React from 'react'

// Component
import MenuItem from './menuItem'
import MenuTree from './menuTree'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/dashboard' icon='dashboard' label='Dashboard' />
        <MenuItem path='/dashboard2' icon='dashboard' label='Dashboard II' />
        <MenuTree path='/' icon='edit' label='Cadastro'>
            <MenuItem path='billingCycles' icon='usd' label='Ciclos de Pagamentos' />
        </MenuTree>
    </ul>
)