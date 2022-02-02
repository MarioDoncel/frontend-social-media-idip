/* eslint-disable prettier/prettier */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDateToPost = (data: string) => {
  const dataObj = new Date(data);
  const year = dataObj.getFullYear();
  const monthIndex = dataObj.getMonth();
  const day = dataObj.getDate();
  const hours = dataObj.getHours();
  const minutes = dataObj.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';
  const formatHour = (hour: string) => {
    let formatedHour = hour;
    if (Number(hour) > 12) formatedHour = (Number(hour) - 12).toString();
    if (formatedHour.length < 2) return `0${formatedHour}`;
    return `${formatedHour}`;
  };

  // eslint-disable-next-line max-len
  const formatedData = `${months[monthIndex]} ${day}, ${formatHour(
    hours.toString()
  )}:${minutes.toString().length < 2 ? `0${minutes} ` : minutes
    }${period}, ${year}`;
  return formatedData;
};
