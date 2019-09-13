import { rem } from './mixins/font'

const SMALL_GRID_SIZE = 4
const BASE_GRID_SIZE = 8

export const size = {
  base: rem(16),
  smallScale: factor => rem(factor * SMALL_GRID_SIZE),
  baseScale: factor => rem(factor * BASE_GRID_SIZE)
}
