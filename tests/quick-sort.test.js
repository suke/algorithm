import { quickSort } from '../src/quick-sort'

describe('quick sort', () => {
  test('should be sorted in ascending order', () => {
    expect(quickSort([3, 7, 1, 4])).toEqual([1, 3, 4, 7])
  })
})
