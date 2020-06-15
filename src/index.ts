export function swap<T>(array: T[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
