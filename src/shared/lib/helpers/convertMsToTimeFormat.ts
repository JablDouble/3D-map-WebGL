const convertMsToTimeFormat = (milliseconds: number): string => {
  const hourInMs: number = 60 * 60 * 1000;
  const minuteInMs: number = 60 * 1000;
  const secondInMs: number = 1000;

  const hours: number = Math.floor(milliseconds / hourInMs);
  const minutes: number = Math.floor((milliseconds % hourInMs) / minuteInMs);
  const seconds: number = Math.floor((milliseconds % minuteInMs) / secondInMs);

  let formattedTime: string = '';
  if (hours > 0) {
    formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return formattedTime;
};

export default convertMsToTimeFormat;
