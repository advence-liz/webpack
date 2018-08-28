function converData (arr) {
  if (arr.constructor === Object) {
    return arr
  }

  let result = {}
  arr.forEach(course => {
    let key = course.date
    if (result[key] !== undefined) {
      result[key] = ++result[key]
    } else {
      result[key] = 1
    }
  })

  return result
}
export default converData
