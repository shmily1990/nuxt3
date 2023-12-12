/**
* @description 这里的东西直接暴露出去外面直接用
* @param {string} title
* @author tony
* @date 2023-12-12
*
*/
export const getYear = (title:string, author:string) => {
    console.log(title, author)
    return new Date().getFullYear()
}