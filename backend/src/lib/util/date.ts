export const getForthNight = (currDate: Date) => {
  const currentDateUnix = new Date(currDate)
  const fortnightAway = new Date(+new Date(currDate) - 12096e5);
  return {
    from: fortnightAway.toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
    }),
    end: currentDateUnix.toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
    }),
  }
}