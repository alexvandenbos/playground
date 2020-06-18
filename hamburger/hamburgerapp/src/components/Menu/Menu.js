import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                1e Link
             </a>
            <a href="/">
                2e Link
            </a>
            <a href="/">
                3e Link
            </a>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu; 