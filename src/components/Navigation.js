import React from 'react'
import { NavLink } from 'react-router-dom';


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
                to="/neworder"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Make Order
            </NavLink>
            <NavLink
                to="/lists"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Orders
            </NavLink>
            <NavLink
                to="/menuitems"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Menu Items
            </NavLink>
            <NavLink
                to="/mission"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Our Mission
            </NavLink>
            <NavLink
                to="/ourstory"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Our Story
            </NavLink>
        </div>
    )
}

export default Navigation