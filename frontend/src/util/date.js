import dayjs from "dayjs"

export const getForthNight = (currDate, operation) => {
  const currentDateUnix = new Date(currDate)
  let fortnightAway = new Date(+new Date(currDate) - 12096e5);

  if (operation === 'next') {
    fortnightAway = new Date(+new Date(currDate) + 12096e5);
  }

  return {
    from: dayjs(`${fortnightAway}`).format('MM-DD-YYYY'),
    end: dayjs(`${currentDateUnix}`).format('MM-DD-YYYY'),
  }
}

export const formatDateRange = (date) => {
  const range = getForthNight(date)

  return `${dayjs(range.from).format('D')} - ${dayjs(range.end).format('D MMM YYYY')}`
}