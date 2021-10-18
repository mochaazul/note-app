import React, { useRef } from 'react'

const CustomParagraphLayout : React.FC = () => {
    let editorRev = useRef<null | HTMLDivElement>(null)

    

    return(
        <div ref={editorRev} contentEditable style={{width:"100%", height:"40px"}}>

        </div>
    )
}

export default CustomParagraphLayout