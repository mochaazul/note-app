import React from 'react'
import EditorJS from '@editorjs/editorjs'
import { useLocation } from 'react-router'
import { TNavList } from '../SideBar/types'
import {useEffect, useRef, useState } from 'react'
import { StyledNote } from './notes.style'
import styled from 'styled-components'
import EditorJSPlugin from '../Tools/EditorJS'

type passedProps = {
    item : TNavList
}

const Notes: React.FC = () => {
    let location = useLocation<passedProps>()
    let tools = {
        table: {
            class : "FUCK"
        }
    }

    return (
        <>
            <StyledNote>
                {/* {location.state.item.title} */}
                <EditorJSPlugin tools={tools} />
            </StyledNote>
        </>
    )
}

export default Notes