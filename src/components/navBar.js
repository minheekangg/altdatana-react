import React from 'react'
import { Menu, Button, Icon, Sidebar, Segment, Header, Image } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { 
        activeItem: 'home', 
        mobileNavVisible: false,
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem, mobileNavVisible } = this.state;
        return (
            <nav class="sticky" id="navbar">
                <Menu secondary id="primary-menu">
                    <Menu.Item
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                        id="home"
                        name="home"
                    >
                        <h1>Altdatana</h1>
                    </Menu.Item>
                    <Menu.Item
                        name="about"
                        active={activeItem === "about"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Questions"
                        active={activeItem === "questions"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="contact us"
                        active={activeItem === "contact"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="logout"
                            active={activeItem === "logout"}
                            onClick={this.handleItemClick}
                        >
                            <Button>Log In</Button>
                        </Menu.Item>
                        <Menu.Item
                            name="sign up"
                            active={activeItem === "signup"}
                            onClick={this.handleItemClick}
                        >
                            <Button>Sign Up</Button>
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
                            name="about"
                            active={activeItem === "about"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="faq"
                            active={activeItem === "questions"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="contact us"
                            active={activeItem === "contact"}
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

                    <Sidebar.Pusher dimmed={mobileNavVisible}>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </nav>
        );
    }

}


export default NavBar
