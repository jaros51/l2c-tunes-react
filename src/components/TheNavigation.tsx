import React from 'react'

import { NavLink } from 'react-router-dom';


export const TheNavigation = () => {
    return (
        <div>
          <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        </div>
    )
}


