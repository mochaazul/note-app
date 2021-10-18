import {ReactComponent as image} from "../../../../../image.svg"
import { renderToStaticNodeStream } from 'react-dom/server'

class CustomParagraph{
    static get toolbox(){
       

        return {
            title: "text",
            icon: image
        }
    }

    render(){
        let rootNode = document.createElement('div')
        rootNode.appendChild(document.createTextNode("asdasd"))

        return rootNode
    }

    save(){
        return {

        }
    }
}

export default CustomParagraph