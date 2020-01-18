import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <nav class="sticky"  id="navbar"> 
                <Menu secondary>
                    <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick} id="home" >
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
                            name='login'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='sign up'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </nav>
        )
    }

}


export default NavBar
