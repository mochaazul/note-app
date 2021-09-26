import React from 'react'
import { StyledNavItem, StyledSideNav } from './styled'
import { TNavData } from './types'

const SideNav: React.FC<TNavData> = ({list}) => {

    return(
        <StyledSideNav isShowed={true}>
            <a href="#">Notes Application..</a>
            {list?.map((item) => {
                return <StyledNavItem key={item.id} isShowed={true} to={{pathname:"notes",search:`?${item.title}`,state:{item}}}>{item.title}</StyledNavItem> 
            })}

            <a href="#">Settings</a>
        </StyledSideNav>
    )
}

export default SideNav