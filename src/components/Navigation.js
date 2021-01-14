import React from 'react'
import { NavLink } from 'react-router-dom'

const links = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: "white"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Home
            </NavLink>
            <NavLink
                to="/orders"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Orders
            </NavLink>
            <NavLink
                to="/items"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Menu Items
            </NavLink>
        </div>
    )
}

export default Navigation