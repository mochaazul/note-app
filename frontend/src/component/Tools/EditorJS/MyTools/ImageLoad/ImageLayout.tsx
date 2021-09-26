import React, { useEffect, useRef } from 'react'

const ImageLayout : React.FC = () => {
    const imageRefs = useRef<null | HTMLImageElement>(null)
    const inputFilesButton = useRef<null | HTMLInputElement>(null)

    // to auto click some updates
    // inputFilesButton.current?.click()

    return (
        <div>
            <input type="file" ref={inputFilesButton} />
            <img src="#" ref={imageRefs} alt="this images"/>
        </div>
    )
}

export default ImageLayout