import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navigation from './nav'

const ToHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <header
            css={css `
                background-color: rgb(44,62,80);
                padding: 1rem;
            `}
        >
            <div
                css={css `
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <ToHome to="/">
                    <h1>Gatsby Hotel</h1>
                </ToHome>

                <Navigation/>
                
            </div>
        </header>
     );
}
 
export default Header;