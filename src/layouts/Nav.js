import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import Signedin from './Signedin'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Nav() {

    const {cartItems} = useSelector(state => state.cart)


    const [isAuthenticated, setAuthenticated] = useState(true)

    let history = useHistory()

    const handleSignOut = () => {
        setAuthenticated(false)
        history.push("/")
    }

    const handleSignIn = () => {
        setAuthenticated(true)
    }



    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            {cartItems.length>0&&<CartSummary />}
                            {
                                isAuthenticated ? <Signedin signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />
                            }


                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

export default Nav
