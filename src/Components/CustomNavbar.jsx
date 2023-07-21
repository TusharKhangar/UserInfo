 import  { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div >
            <Navbar
                // fixed={"top"}
                color={'light'}
                expand={'md'}
                className={'px-5 shadow-sm'}
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="/src/assets/Heading.png"
                        style={{
                            height: 40,
                            width: 40 ,
                        }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/Store/">Store</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Contact Us
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href={'/joinw'}>
                                    Join Whatsapp Group
                                </DropdownItem>
                                <DropdownItem>Facebook</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Twitter</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href={'/login'}>
                                SignIn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={'/signup'}>
                                SignUp
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}
export  default CustomNavbar;
