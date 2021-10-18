import React, { useEffect, useRef, useState } from 'react'

const ImageLayout : React.FC<{imageurl ?: string }> = (imageurl) => {
    const [imageRefs, setImageRefs] = useState<string | undefined>("")
    // const inputFilesButton = useRef<null | HTMLInputElement>(null)
    
    // to auto click some updates
    // inputFilesButton.current?.click()
    // useEffect(()=> {
    //     inputFilesButton.current?.addEventListener('change', (e) => {
    //         console.log(inputFilesButton.current?.files)
    //         let files = inputFilesButton.current?.files
    //         console.log(files)
    //         setImageRefs(URL.createObjectURL(files?.item(0)))
    //     })
    // }, [inputFilesButton])

    useEffect(()=>{
        if(imageurl){
            console.log(imageurl.imageurl)
            let file = imageurl.imageurl
            // let files = URL.createObjectURL(imageurl.imageurl)
            setImageRefs(file)
        }
    },[])
    return (
        <div>
            {/* <input type="file" ref={inputFilesButton}/> */}
            <img src={imageRefs} alt="this images"/>
        </div>
    )
}

export default ImageLayout