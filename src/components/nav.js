import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav `
    display: flex;
    justify-content:center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;

    &:not(:last-child){
        margin-right: 1rem;
    }
    &.active-page {
        border-bottom: 1px solid #FFFFFF;
    }
`;

const Navigation = () => {
    return ( 
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="active-page"
            >Home</NavLink>   
            <NavLink 
                to={'/about-us'}
                activeClassName="active-page"
            >About us</NavLink>   
        </Nav>
     );
}
 
export default Navigation;