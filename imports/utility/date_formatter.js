import moment from 'moment';

const DateFormatter = {
  format(date) {
    return moment(date).format('DD-MM-YYYY');
  },
};

export default DateFormatter;
