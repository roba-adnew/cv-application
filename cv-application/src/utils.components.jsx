import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
}

export function Tenure({ job }) {
    const start = format(job['startDate'], 'MMM yyyy');
    const end = format(job['endDate'], 'MMM yyyy');
    return (
        <p id='tenure' className='tenure'>{`${start} - ${end}`}</p>
    )

}

export function Feat() {
    return {
        id: uuidv4(),
        text: '',
    }
}

function Job(company, role, startDate, endDate) {
    const goodStartDate = startDate !== '' ? startDate : setDefaultDueDate();
    const goodEndDate = endDate !== '' ? endDate : setDefaultDueDate();
    let feats = [];

    return {
        id: uuidv4(),
        company,
        role,
        startDate: goodStartDate,
        endDate: goodEndDate,
        feats,
        display: true,
    }
}

Tenure.propTypes = { job: PropTypes.object }

export default Job;