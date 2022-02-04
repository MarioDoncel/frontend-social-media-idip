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

export const formatDateOfBirth = (data: string) => {
  const dataObj = new Date(data);
  const year = dataObj.getFullYear();
  const monthIndex = dataObj.getMonth();
  const day = dataObj.getUTCDate();
  return `${months[monthIndex]}, ${day < 10 ? `0${day}` : day}, ${year}`;
};
