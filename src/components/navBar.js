import React from 'react'
import { Menu, Button, Icon, Sidebar, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import { ROUTE_ROOT } from "../utils/constants";

class NavBar extends React.Component {
    state = { 
        activeItem: 'home', 
        mobileNavVisible: false,
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem, mobileNavVisible } = this.state;
        return (
            <nav className="sticky" id="navbar">
                <Menu secondary id="primary-menu">
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/`}
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        id="home"
                        name="home"
                    >
                        <h1>Altdatana</h1>
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/about`}
                        name="about"
                        active={activeItem === "about"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/products`}
                        name="products"
                        active={activeItem === "products"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to={`${ROUTE_ROOT}/dashboard`}
                        name="dashboard"
                        active={activeItem === "dashboard"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="logout"
                            active={activeItem === "logout"}
                            onClick={this.handleItemClick}
                        >
                            <Button className="primary-button">Log In</Button>
                        </Menu.Item>
                        <Menu.Item
                            name="sign up"
                            active={activeItem === "signup"}
                            onClick={this.handleItemClick}
                        >
                            <Button className="primary-button">Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item
                            className="mobile-btn"
                            name="mobile"
                            onClick={() =>
                                this.setState(
                                    {
                                        mobileNavVisible: !mobileNavVisible
                                    },
                                    () => console.log(mobileNavVisible)
                                )
                            }
                        >
                            <Icon name="bars" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        vertical
                        direction="right"
                        visible={mobileNavVisible}
                        width="thin"
                    >
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/about`}
                            name="about"
                            active={activeItem === "about"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/products`}
                            name="products"
                            active={activeItem === "products"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            as={Link}
                            to={`${ROUTE_ROOT}/dashboard`}
                            name="dashboard"
                            active={activeItem === "dashboard"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="login"
                            active={activeItem === "login"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="signup"
                            active={activeItem === "signup"}
                            onClick={this.handleItemClick}
                        />
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={mobileNavVisible}
                        onClick={() =>
                            this.setState({ mobileNavVisible: false })
                        }
                    ></Sidebar.Pusher>
                </Sidebar.Pushable>
            </nav>
        );
    }

}


export default NavBar
