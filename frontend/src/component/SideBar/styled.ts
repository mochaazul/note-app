import Styled from 'styled-components'
import { TConditional } from './types'
import { Link } from 'react-router-dom'

//this will decide wheter nav item will be hide or not
export const StyledNavItem = Styled(Link)<TConditional>`
    width: 100%;
    text-decoration:none;
`

export const StyledSideNav = Styled.div<TConditional>`
    position:sticky;
    min-width:12em;
    max-width:15em;
    width: 15%;
    height: 100%;
    left:0;
    top:0;
    background-color: #ff99ff;
    padding-top: 1.5em;
    a{
        display:block;
        text-decoration:none;
        width: 100%;
        color: black;
        padding: 0.5em 1em;
    }
`
