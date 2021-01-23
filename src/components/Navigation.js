import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Orders.css';

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
        <div className="Orders" style={{flex: 1, flexDirection: 'row'}} >
      
         <ul class="navbar-nav flex-row"></ul>
        <p></p>
        <p></p>
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
                to="/menuitems"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Menu
            </NavLink>
            <NavLink
                to="/neworder"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Order
            </NavLink>
            <NavLink
                to="/lists"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Client Orders
            </NavLink>
            <NavLink
                to="/mission"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Mission
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
            <NavLink
                to="/ingredients"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Whole
            </NavLink>
            <NavLink
                to="/contactus"
                exact
                style={links}
                activeStyle={{
                    background: 'pink'
                }}
            > Contact
            </NavLink>
        </div>
    )
}

export default Navigation