import React from 'react'
import EditorJS from '@editorjs/editorjs'
import { useLocation } from 'react-router'
import { TNavList } from '../SideBar/types'
import {useEffect, useRef, useState } from 'react'
import { NoteTitle, StyledNote } from './notes.style'
import styled from 'styled-components'
import EditorJSPlugin from '../Tools/EditorJS'
import ImageLoad from '../Tools/EditorJS/MyTools/ImageLoad'
import ImagePicker from '../Tools/EditorJS/MyTools/ImagePicker'

type passedProps = {
    item : TNavList
}

const Notes: React.FC = () => {
    let location = useLocation<passedProps>()
    let tools = {
        image: ImageLoad,
        imagePick: ImagePicker
    }

    return (
        <>
            <StyledNote>
                <NoteTitle>
                  {location.state.item.title}
                </NoteTitle>
                <EditorJSPlugin tools={tools}>
                    
                </EditorJSPlugin>
            </StyledNote>
        </>
    )
}

export default Notes