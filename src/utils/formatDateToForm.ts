const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

export const formatDateToForm = (data: string) => {
  const dataObj = new Date(data);
  const year = dataObj.getFullYear();
  const monthIndex = dataObj.getMonth();
  const day = dataObj.getUTCDate();
  return `${year}-${months[monthIndex]}-${day < 10 ? `0${day}` : day}`;
};
