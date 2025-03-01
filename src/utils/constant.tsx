import moment from 'moment';

export const convertDuration_HMS = (duration: string) => {
  if (duration) {
    const durationMoment = moment.duration(duration);
    const hours = durationMoment.hours();
    const minutes = durationMoment.minutes();
    const seconds = durationMoment.seconds();

    let result = '';
    if (hours) result += `${hours} hours `;
    if (minutes) result += `${minutes} minutes `;
    if (seconds) result += `${seconds} seconds`;

    return result.trim();
  } else return '';
};

export const releasedDate = (date: string) => {
  if (date) {
    return date.split(',')[0];
  } else return '';
};
