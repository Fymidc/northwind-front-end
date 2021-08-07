import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react'

function CartSummary() {

    const {cartItems} = useSelector(state => state.cart)

    

    return (
        <div>
            <Dropdown item text='Sepetim'>
                <Dropdown.Menu>
                    {
                        cartItems.map((item)=>(
                             <Dropdown.Item key={item.product.id} >{item.product.productName}
                             <Label>{item.quantity}</Label>
                             </Dropdown.Item>
                        ))
                    }
                   
                    
                            <DropdownDivider />
                    <Dropdown.Item as={NavLink} to="/cart" >Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CartSummary
