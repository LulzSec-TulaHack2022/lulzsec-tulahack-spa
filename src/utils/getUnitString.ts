/* eslint-disable prettier/prettier */
/**
 *
 * @param n
 * @param unit - ['штук', 'штука', 'штуки'], 10 штук, 1 штука, 4 штуки
 * @returns {string}
 */
export const getUnitString = (
  n: number,
  unit: [string, string, string],
): string => {
  const end =
    n % 10 === 1 && n % 100 !== 11
      ? 1
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 2
        : 0

  const liter = unit[end]

  return `${n} ${liter}`
}
