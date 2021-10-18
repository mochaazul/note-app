import React, { useEffect, useRef, useState } from 'react'
import { HiddenButton, ImageDrop } from './styled'


const ImagePickerLayout : React.FC<{fun : any}> = ({fun}) => {
    const picker = useRef<null | HTMLInputElement>(null)
    const [pickerVal, setPickerVal] = useState<FileList | null>(null)

    const firingSomeFun = () => {
        // picker.current?.addEventListener("input", (e : any) => {
            
        //     console.log(e.target.value)
        //     // fun(e.target?.files[0])
        //     console.log(fun)
        // })
        picker.current?.click()
    }

    useEffect(() => {
        picker.current?.click()
        if(picker.current?.files){
            if(picker.current?.files.length > 0){
                console.log("hey tayooooo ada datanya nih cepat kirim ke sebelah")
                console.log(picker.current?.files)
                console.log("sesudah nih: "+fun.getCurrentBlockIndex())
                fun.clear()
                fun.insert("image",{url: picker.current?.files[0]})
            }
        }
    }, [pickerVal])

    return(
        <ImageDrop onClick={(e) => {firingSomeFun()}}>
            <HiddenButton onChange={(e) => {setPickerVal(e.target.files)}} type="file" ref={picker}/>
            Click to Upload or Drag here
        </ImageDrop>
    )
}

export default ImagePickerLayout