let counter = 0
// 这里可以写接口数据
export default () => {
  counter++
  return JSON.stringify(counter)
}