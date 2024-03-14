import { format } from 'date-fns';
import PropTypes from 'prop-types';

export function Tenure({ startDate, endDate }) {
    const start = format(startDate, 'MMM yyyy');
    const end = format(endDate, 'MMM yyyy');
    return (
        <p id='tenure' className='tenure'>{`${start} - ${end}`}</p>
    )
}

Tenure.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string
}