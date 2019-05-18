/**
 * @desc: 深度冻结一个对象
 * @param {object} - 需要冻结的对象
 * @return: 传入的对象（深度冻结）
 */

function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object)
  for (let name of propNames) {
    let value = object[name]
    object[name] =
      value && typeof value === 'object' ? deepFreeze(value) : value
  }
  return Object.freeze(object)
}
