import { partition } from './utils'

export function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const pivot = arr.pop()
  const [less, greater] = partition(arr, n => n < pivot)

  return [...quickSort(less), pivot, ...quickSort(greater)]
}
