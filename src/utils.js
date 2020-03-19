export function findSmallest(arr) {
  return Math.min(...arr)
}

export function partition(arr, callback) {
  return arr.reduce(
    (acc, e) => {
      acc[callback(e) ? 0 : 1].push(e)
      return acc
    },
    [[], []]
  )
}
