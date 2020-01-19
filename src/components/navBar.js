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
                <Menu secondary>
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
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="faq"
                        active={activeItem === "friends"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="contact us"
                        active={activeItem === "friends"}
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
                            active={activeItem === "logout"}
                            onClick={this.handleItemClick}
                        >
                            <Button>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item
                            className="mobile-btn"
                            name="mobile"
                            onClick={()=>this.setState({
                                mobileNavVisible: !mobileNavVisible
                            }, ()=> console.log(mobileNavVisible))}
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
                        <Menu.Item as="a">
                            <Icon name="home" />
                            Home
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="gamepad" />
                            Games
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="camera" />
                            Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={mobileNavVisible}>
                        <Segment basic>
                            <Header as="h3">Application Content</Header>
                            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </nav>
        );
    }

}


export default NavBar
