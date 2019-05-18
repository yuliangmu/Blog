/**
 * @desc: 深度冻结一个对象
 * @param {obj} - 需要冻结的对象
 * @return: 传入的对象（深度冻结）
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#Freezing_arrays
function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj)
  for (let name of propNames) {
    let value = obj[name]
    obj[name] = value && typeof value === 'object' ? deepFreeze(value) : value
  }
  return Object.freeze(obj)
}

// https://30secondsofcode.org/object#deepfreeze
const deepFreeze2 = obj =>
  Object.keys(obj).forEach(prop =>
    !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop])
      ? null
      : deepFreeze2(obj[prop])
  ) || Object.freeze(obj)
