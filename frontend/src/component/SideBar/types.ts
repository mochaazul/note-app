//type for structuring the data of list
export type TNavList = {
        id ?: number,
        title : string,
        body ?: string,
        createdAt ?: string,
        updatedAt ?: string
}
//structured data for nav component
export type TNavData = {
    list? : [TNavList] 
}
//for conditionally show / hide components
export type TConditional = {
    isShowed : boolean
}