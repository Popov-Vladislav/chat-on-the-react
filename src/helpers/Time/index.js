import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

const Time = ({ date }) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: ru });
};
export default Time;

Time.propTypes = {
  date: PropTypes.object,
};
