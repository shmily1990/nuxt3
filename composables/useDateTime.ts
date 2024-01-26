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

export const getYesterDay = () => {
    // 获取当前日期
    const today = new Date();

    // 获取昨天的日期
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // 格式化日期为 "YYYY-MM-DD"
    const formattedYesterday = yesterday.toISOString().split('T')[0];
    return formattedYesterday
}