import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'
import { TypeTools } from './types'

const EditorJSPlugin : React.FC<TypeTools> = (tools) => {
    const EDITOR_ID : string = "EDITOR_JS_PLUGIN"

    //reference that hold the Editor
    const editorRefs = useRef<null | EditorJS>(null)

    // useEffect to initialize the EditorJs and destroy it when the component gone
    useEffect(()=>{
        if(!editorRefs.current) initEditor()

        //to destroy the editor references when this component destroyed
        return () => {
            editorRefs.current?.destroy()
            editorRefs.current = null
        }
    }, [])

    //function to initialize the EditorJs
    const initEditor = () => {
        const editorjs : EditorJS = new EditorJS({
            holder: EDITOR_ID,
            autofocus: true,
            inlineToolbar: true,
            ...tools
        })

        editorjs.isReady
            .then(()=>{
                console.log("This is ready man! Hurry up")
            })
            .catch((reason) => {
                console.log(`Editor.js was failed to initialize due to reason ${reason}`)
            })
    }

    //returning the react components
    return(
        <div id={EDITOR_ID}></div>
    )
}

export default EditorJSPlugin