import React, { Fragment } from 'react';
import NavBar from './index';


const NavbarWrapper = (props) => (
    <Fragment>
        <NavBar />
        {props.children}
    </Fragment>
);

export default NavbarWrapper;