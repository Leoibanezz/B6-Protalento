import { Nav, NavItem, NavLink } from 'reactstrap';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Nav
            >
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
            <Outlet></Outlet>
        </>
    );
};

export default Navbar;