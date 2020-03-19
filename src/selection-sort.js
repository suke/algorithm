import { findSmallest } from './utils'

export function selectionSort(arr) {
  const newArr = []
  let dup = [...arr]
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const smallest = findSmallest(dup)
    newArr.push(smallest)
    dup = dup.filter(n => n !== smallest)
  }

  return newArr
}
