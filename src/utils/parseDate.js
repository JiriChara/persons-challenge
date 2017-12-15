import moment from 'moment';

export default (dateString) => {
  // Not a valid ISO 8601 - there should be no white-space between secs and timezone offset ;)
  const dateFormat = 'YYYY-MM-DDTHH:mm:ss ZZ';

  return moment(dateString, dateFormat);
};
