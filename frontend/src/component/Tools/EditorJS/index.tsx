import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'
import { TypeTools } from './types'
import styled from 'styled-components'
import ImageLoad from './MyTools/ImageLoad'
import { ReactComponent as ImageIcon} from "../../../image.svg"
import CustomParagraph from './MyTools/CustomParagraph'


// experimental styled to force editor.js default styles
const StyledEditor = styled.div`
    background-color: #FFFFFC;
    margin-top: 1em;
    flex-grow: 1;
    padding: 1em 2em;

    .ce-block__content,.ce-toolbar__content{
        max-width:100%;
    }
`

const EditorJSPlugin : React.FC<TypeTools> = (tools) => {
    const EDITOR_ID : string = "EDITOR_JS_PLUGIN"

    //reference that hold the Editor
    const editorRefs = useRef<null | EditorJS>(null)

    const savedData = () => {
        editorRefs.current?.save()
            .then((Editordata) => {
                console.log(Editordata)
            })
    }
    
    // useEffect to initialize the EditorJs and destroy it when the component gone
    useEffect(()=>{
        console.log("fuc")
        if(!editorRefs.current) {
            initEditor()
            console.log("initialize new instance")
        }
        //to destroy the editor references when this component destroyed
        return () => {
            console.log("kok gw kepanggil cuk weekend ini")
            editorRefs.current?.destroy()
            editorRefs.current = null
        }
    },[])

    useEffect(() => {
        editorRefs.current?.focus()
    }, [editorRefs])
    //function to initialize the EditorJs
    const initEditor = () => {
        console.log("init nih")
        const editorjs : EditorJS = new EditorJS({
            holder: EDITOR_ID,
            inlineToolbar: true,
            placeholder:"Ayoktulis",
            // tools: {
            //     image : ImageLoad,
            //     text : CustomParagraph
            // }
            ...tools
        })
        editorjs.isReady
        .then(()=>{
                editorRefs.current = editorjs
                console.log(editorRefs)
            })
            .catch((reason) => {
                console.log(`Editor.js was failed to initialize due to reason ${reason}`)
            })
    }


    //returning the react components
    return(
        <StyledEditor id={EDITOR_ID} >
            {/* <ImageIcon/> */}
            {/* <button onClick={savedData}>Click Cek</button> */}
        </StyledEditor>
    )
}

export default EditorJSPlugin