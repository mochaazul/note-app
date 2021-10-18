import ReactDOM from "react-dom"
import ImageLayout from "./ImageLayout"


class ImageLoad {
    data: any
    api: any
    constructor({data,api}: {data: any, api:any}){
        this.api = {...api}
        this.data = {...data}
    }

    rootNode: any
    checkLoadStats: Boolean = false

    render(url ?: any) : HTMLDivElement{
        console.log("ini dari tampilan image")
        console.log(this.data)
        this.rootNode = document.createElement('div')
        let imageurl = url ? url : ""
        if(!(Object.keys(this.data).length === 0)) {
            let files = this.data.url
            if(typeof this.data.url.name == 'string'){
                files = URL.createObjectURL(this.data.url)
            }
            this.renderImage(files)
            // console.log(this.data)
        }
        return this.rootNode
    }

    save(blockContent : any){
        return {
            url : blockContent.value
        }
    }

    static get pasteConfig(){
        return {
            files: {
                mimeTypes: ['image/*'],
                extensions: ['gif', 'jpg', 'png', 'jpeg']
            }
        }
    }

    onPaste(event : any){
        console.log("ada yg paste nih")
        this.checkLoadStats = true
        switch (event.type){
            case 'file':
                const file : File = event.detail.file;
                const reader = new FileReader();

                reader.onload = (loadEvent) => {
                    this.renderImage(loadEvent.target?.result)
                    // console.log(loadEvent.target?.result)
                }

                reader.readAsDataURL(file)
                break
        }
    }
    renderImage(imageurl : any){
        ReactDOM.render(
            (
                <ImageLayout imageurl= {imageurl} />
            ), this.rootNode
        )
    }
}


export default ImageLoad