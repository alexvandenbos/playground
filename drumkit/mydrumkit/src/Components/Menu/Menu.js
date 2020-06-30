import React from 'react';
import { StyledMenu } from './Menu.styled';
import Instrument from '../Instrument/Instrument';
import { SoundsRegistry } from '../../Sounds/Registry';



let Components = Object.keys(SoundsRegistry).map(key =>
    <Instrument
        name={SoundsRegistry[key][0]}
        path={SoundsRegistry[key][1]}
        button={SoundsRegistry[key][2]}
        key={key}
        id={key}
    />
)

const Menu = () => {

    return (
        <StyledMenu>
            {Components}
        </StyledMenu>
    )
}

export default Menu; 
