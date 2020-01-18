import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <nav class="sticky"  id="navbar"> 
                <Menu secondary>
                    <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick} id="home" name='home' >
                        <h1>Altdatana</h1>
                    </Menu.Item>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='faq'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='contact us'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item 
                            name="logout"
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        >
                            <Button>Log In</Button>
                        </Menu.Item>
                        <Menu.Item
                            name='sign up'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        >
                            <Button>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </nav>
        )
    }

}


export default NavBar
