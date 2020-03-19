import { selectionSort } from '../src/selection-sort'

describe('selection sort', () => {
  test('should be sorted in ascending order', () => {
    expect(selectionSort([3, 7, 1, 4])).toEqual([1, 3, 4, 7])
  })
})
