export function daysTillChristmas () {
  const today = new Date()
  const christmasDay = new Date('12/25/2022')
  const dateToday = today.getDate()
  const month = today.toLocaleString('default', {month: 'short'})
  const difference = christmasDay.getTime() - today.getTime()
  return Math.ceil(difference / (1000 * 3600 * 24));
}
