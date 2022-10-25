import React from 'react'
import {Nav,NavLink,NavLink2,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements";


const Navbar = ({nav1, nav2}) => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                명지톡톡
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/dorm" activeStyle>
                    {nav1}
                </NavLink>
                <NavLink to="/bus" activeStyle>
                    {nav2}
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign-in" >로그인</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar
